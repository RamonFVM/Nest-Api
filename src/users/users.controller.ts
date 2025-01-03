import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async GetUsers() {
 
    return this.usersService.GetNameUsers();
  }

  @Post()
  async UserCreate(@Body() data: Prisma.UsersCreateInput) {
 
    return this.usersService.CreateUsers(data);
  }
}
