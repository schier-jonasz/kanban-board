import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import * as jwt from "jsonwebtoken";

import { UserRepository } from "./user.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { InjectConfig } from "@unifig/nest";
import { JwtConfig } from "../config/jwt.config";
import { ConfigContainer } from "@unifig/core";
import { TeamRepository } from "../team/team.repository";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  public constructor(
    private readonly repository: UserRepository,
    private readonly teamRepository: TeamRepository,
    @InjectConfig(JwtConfig)
    private readonly jwtConfig: ConfigContainer<JwtConfig>
  ) {}

  public async createUser(dto: CreateUserDto) {
    if (dto.teamId && !dto.teamRole) {
      throw new BadRequestException(
        "You need to provide team role when you assign a user to a team"
      );
    }

    return await this.repository.createUser(dto);
  }

  public async getUserById(userId: string) {
    const user = await this.repository.getUserById(userId);

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return user;
  }

  public async loginUser(loginUserDto: LoginUserDto): Promise<string> {
    const user = await this.repository.getUserByCredentials(loginUserDto);

    if (!user) {
      throw new NotFoundException(`User with such credentials not found`);
    }

    return jwt.sign(
      { id: user._id, name: user.name, role: user.role, teamId: user.teamId },
      this.jwtConfig.values.secret
    );
  }

  public async assignToTeam(userId: string, teamId: string) {
    const user = await this.repository.getUserById(userId);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const team = await this.teamRepository.getTeamById(teamId);
    if (!team) {
      throw new NotFoundException(`Team with ID ${teamId} not found`);
    }

    return await this.repository.updateUser(userId, { teamId });
  }

  public async editUser(userId: string, dto: UpdateUserDto) {
    const user = await this.repository.getUserById(userId);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const { teamId, teamRole } = dto;
    if (teamId) {
      const team = await this.teamRepository.getTeamById(teamId);
      if (!team) {
        throw new NotFoundException(`Team with ID ${teamId} not found`);
      }

      if (!teamRole) {
        throw new BadRequestException(
          "You need to provide team role when you assign a user to a team"
        );
      }
    }

    return await this.repository.updateUser(userId, dto);
  }
}
