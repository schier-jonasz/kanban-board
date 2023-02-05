import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { TeamRepository } from "./team.repository";
import { CreateTeamDto } from "./dto/create-team.dto";

@Injectable()
export class TeamService {
  public constructor(private readonly repository: TeamRepository) {}

  public async createTeam(dto: CreateTeamDto) {
    const teamExists = await this.repository.getTeamByName(dto.name);

    if (teamExists) {
      throw new BadRequestException("Team with a given name already exists");
    }

    return await this.repository.createTeam(dto);
  }

  public async getTeamById(teamId: string) {
    const team = await this.repository.getTeamById(teamId);
    if (!team) {
      throw new NotFoundException(`Team with ID ${teamId} not found`);
    }

    return team;
  }

  public async getTeams() {
    return await this.repository.getTeams();
  }
}
