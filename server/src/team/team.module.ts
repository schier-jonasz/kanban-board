import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Team, TeamSchema } from "./team.schema";
import { TeamRepository } from "./team.repository";
import { TeamController } from "./team.controller";
import { TeamService } from "./team.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Team.name,
        schema: TeamSchema,
      },
    ]),
  ],
  controllers: [TeamController],
  providers: [TeamRepository, TeamService],
  exports: [TeamRepository],
})
export class TeamModule {}
