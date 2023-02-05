import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({
  collection: "team",
  timestamps: true,
})
export class Team extends Document {
  public _id: Types.ObjectId;

  @Prop({ required: true, unique: true })
  public name: string;
}

export const TeamSchema: any = SchemaFactory.createForClass(Team);
