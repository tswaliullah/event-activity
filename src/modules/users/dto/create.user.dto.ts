export class CreateUserDto {
    id: string;
    //  @IsEmail()
    email: string;
    password: string;
}