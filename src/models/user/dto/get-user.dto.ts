import { IUser } from "#interfaces/user"

export class GetUserDto {
  id?: IUser["id"]
  username?: IUser["username"]
}
