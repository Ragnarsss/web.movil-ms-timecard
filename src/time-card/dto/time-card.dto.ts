import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateTimeCardInput {
  @Field()
  @IsNotEmpty()
  @IsDate()
  startTime: Date;

  @Field()
  @IsNotEmpty()
  @IsDate()
  endTime: Date;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  totalTime: number;
}

@ObjectType()
export class TimeCardType {
  @Field()
  id: number;

  @Field()
  startTime: Date;

  @Field()
  endTime: Date;

  @Field()
  totalTime: number;
}
