import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  describe('findAll', () => {
    it('shound return an array of users', async () => {
      const result = [
        { id: 1, email: 'alice@prisma.io', tel: null, name: 'Alice' },
        { id: 2, email: 'Brian@prisma.io', tel: null, name: 'Brian' },
      ];

      jest.spyOn(service, 'users').mockImplementation(async () => result);

      expect(await controller.findAll()).toBe(result);
    });
  });
});
