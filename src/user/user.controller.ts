/* eslint-disable prettier/prettier */

import { Controller,Get, Param, Req, Post,Body, Put  } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';


interface datas {

  name: string;
  email: string;
  password: string;

  }

  interface dataUpdate {

    name?: string;
    email?: string;
    password?: string;

    }

@Controller('user')
export class UserController {

    constructor(private readonly user: UserService){}
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.user.findOneFunc(id);
      }

      @Post()
      createUser(@Body() body: datas){
        return this.user.createUser(body);
      }

      @Put(':id')
      userUpdate(@Param('id') id: number, @Body() body:dataUpdate ){
        return this.user.updateUser(id, body)
      }
    }
