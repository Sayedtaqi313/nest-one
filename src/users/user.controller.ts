import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  createUser(@Body() body: Partial<User>) {
    return this.userService.createUser(body);
  }

  @Get('users')
  getUsers() {
    return this.userService.getUsers();
  }
}
