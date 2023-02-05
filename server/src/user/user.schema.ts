import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export enum UserRole {
  REGULAR = "regular",
  ADMIN = "admin",
}

export enum TeamRole {
  PRODUCT_OWNER = "product-owner",
  LEADER = "leader",
  TESTER = "tester",
  DEVELOPER = "developer",
}

@Schema({
  collection: "user",
  timestamps: true,
})
export class User extends Document {
  public _id: Types.ObjectId;

  @Prop({ required: true, unique: true })
  public name: string;

  @Prop({ required: true })
  public password: string;

  @Prop({ required: true, enum: UserRole, default: UserRole.REGULAR })
  public role: UserRole;

  @Prop()
  public teamId?: string;

  @Prop({ enum: TeamRole })
  public teamRole?: TeamRole;
}

export const UserSchema: any = SchemaFactory.createForClass(User);
