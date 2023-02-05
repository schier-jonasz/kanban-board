import { Body, Controller, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";
import { LoginUserDto } from "./dto/login-user.dto";
import { User } from "./user.schema";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("/users")
export class UserController {
  public constructor(private readonly service: UserService) {}

  @Post("/")
  public async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.service.createUser(createUserDto);
  }

  @Get("/:userId")
  public async getUserById(@Param("userId") userId: string): Promise<User> {
    return this.service.getUserById(userId);
  }

  @Put("/:userId")
  public async editUser(
    @Param("userId") userId: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    return this.service.editUser(userId, updateUserDto);
  }

  @Post("/login")
  public async loginUser(@Body() loginUserDto: LoginUserDto): Promise<string> {
    return this.service.loginUser(loginUserDto);
  }

  @Patch("/:userId/teams/:teamId")
  public async assignToTeam(
    @Param("userId") userId: string,
    @Param("teamId") teamId: string
  ) {
    return this.service.assignToTeam(userId, teamId);
  }
}
