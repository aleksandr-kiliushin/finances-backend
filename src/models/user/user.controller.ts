import { Controller, Get, Query, Request, UseGuards } from "@nestjs/common"

import { UserService } from "./user.service"
import { GetUserDto } from "./dto/get-user.dto"
import { AuthGuard } from "#models/auth/auth.guard"

@Controller("user")
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(@Query() query: GetUserDto) {
    return this.userService.getUser(query)
  }

  // @Post()
  // createUser(@Body() createUserDto: CreateUserDto) {
  // 	return this.userService.createUser(createUserDto)
  // }

  // @Patch(':id')
  // updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  // 	return this.userService.updateUser(+id, updateUserDto)
  // }

  // @Delete(':id')
  // deleteUser(@Param('id') id: string) {
  // 	return this.userService.deleteUser(+id)
  // }

  // @Query(() => UserDto)
  // @UseGuards(new AuthGuard())
  // me(
  // 	@Context('user')
  // 	{ id }: IUser,
  // ) {
  // 	return this.userService.getUser({ id })
  // }

  @Get("me")
  getCurrentUserData(
    @Request()
    req: any
  ) {
    return this.userService.getUser({ id: req.userId })
  }
}
