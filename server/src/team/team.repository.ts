import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Team } from "./team.schema";
import { CreateTeamDto } from "./dto/create-team.dto";

@Injectable()
export class TeamRepository {
  public constructor(
    @InjectModel(Team.name)
    private readonly model: Model<Team>
  ) {}

  public async createTeam(dto: CreateTeamDto): Promise<Team> {
    return await this.model.create(dto);
  }

  public async getTeams(): Promise<Team[]> {
    return this.model.find({});
  }

  public async getTeamById(teamId: string) {
    try {
      return await this.model.findById(teamId);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async getTeamByName(name: string): Promise<Team> {
    try {
      return await this.model.findOne({ name });
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
