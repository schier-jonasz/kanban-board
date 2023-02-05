import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateTeamDto } from "./dto/create-team.dto";
import { TeamService } from "./team.service";

@Controller("/teams")
export class TeamController {
  public constructor(private readonly service: TeamService) {}

  @Get("/")
  public async getTeams() {
    return this.service.getTeams();
  }

  @Get("/:teamId")
  public async getTeamById(@Param("teamId") teamId: string) {
    return this.service.getTeamById(teamId);
  }

  @Post("/")
  public async createTeam(@Body() dto: CreateTeamDto) {
    return this.service.createTeam(dto);
  }
}
