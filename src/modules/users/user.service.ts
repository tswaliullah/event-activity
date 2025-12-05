import { Injectable } from "@nestjs/common";
import { User } from "src/modules/users/interfaces/user.interface";

@Injectable()
export class UsersService {
   private readonly users: User[] = [];

   createUser(user: User) {
    this.users.push(user);
  }


getAllUsers(): User[] {
    return this.users;
  }

}