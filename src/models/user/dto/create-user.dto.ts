import { IUser } from "#interfaces/user"

export class CreateUserDto {
  username: IUser["username"]
  password: IUser["password"]
}
