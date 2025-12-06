import type { Request } from "express";
import { Body, Controller, Delete, Get, Param, Post, Query, Req } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { UsersService } from "./user.service";
import { User } from "src/modules/users/interfaces/user.interface";

@Controller('users')
export class UsersController {
    constructor(private readonly userServices: UsersService){}
 
    // @Get(':id')
    // // GET /cats?age=2&breed=Persian
    // fineOne(@Query('age') age: number, @Query('bio') bio: string):string {
    //     return ``
    // }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userServices.getAllUsers();
    }

    @Post('/register')
    async create(@Body() createUserDto: CreateUserDto){
        const result = await this.userServices.createUser(createUserDto);
        return {
            success: true,
            message: 'User created successfully...',
            data: result,
        }
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} user`;
  }
    
}