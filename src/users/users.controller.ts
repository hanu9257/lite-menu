import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.users({});
  }

  @Post()
  postUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}
