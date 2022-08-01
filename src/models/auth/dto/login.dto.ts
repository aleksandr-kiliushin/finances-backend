import { IUser } from "#interfaces/user"

export class LoginDto {
  password: IUser["password"]
  username: IUser["username"]
}
