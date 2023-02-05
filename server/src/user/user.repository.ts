import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./user.schema";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";

@Injectable()
export class UserRepository {
  public constructor(
    @InjectModel(User.name)
    private readonly model: Model<User>
  ) {}

  public async createUser(dto: CreateUserDto): Promise<User> {
    return await this.model.create(dto);
  }

  public async getUserById(userId: string): Promise<User | null> {
    try {
      return await this.model.findById(userId);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async updateUser(userId: string, updateUserDto: Partial<User>) {
    return this.model.findOneAndUpdate({ userId }, updateUserDto, {
      new: true,
    });
  }

  public async getUserByCredentials(loginUserDto: LoginUserDto) {
    return this.model.findOne({
      name: loginUserDto.name,
      password: loginUserDto.password,
    });
  }
}
