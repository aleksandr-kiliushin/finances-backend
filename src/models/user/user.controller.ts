import { Body, Controller, Get, Post, Query, Request, UseGuards } from "@nestjs/common"

import { UserService } from "./user.service"
import { GetUserDto } from "./dto/get-user.dto"
import { AuthGuard } from "#models/auth/auth.guard"
import { CreateUserDto } from "./dto/create-user.dto"

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUser(@Query() query: GetUserDto) {
    return this.userService.getUser(query)
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto)
  }

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
  @UseGuards(AuthGuard)
  getCurrentUserData(
    @Request()
    req: any // eslint-disable-line @typescript-eslint/no-explicit-any
  ) {
    return this.userService.getUser({ id: req.userId })
  }
}
