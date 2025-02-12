import {
  Prop,
  Schema,
  SchemaFactory
} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  accountStatus: string;

  @Prop()
  membershipType?: string;

  @Prop()
  signupDate?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Compound index for filtering by age and email.
UserSchema.index({
  age: 1,
  email: 1
});

// Compound index for filtering by location and sorting by age (descending).
UserSchema.index({
  location: 1,
  age: -1
});

