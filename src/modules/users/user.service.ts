import { Injectable } from "@nestjs/common";
import { User } from "src/modules/users/interfaces/user.interface";
import { PrismaService } from "../prisma/prisma.service";



@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
   private readonly users: User[] = [];

   async createUser(user: User) {
    // const result = await this.prisma.user.create({
    //     data: user
    // })
    return 'result';
  }


getAllUsers(): User[] {
    return this.users;
  }

}