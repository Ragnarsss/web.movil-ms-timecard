import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MinDate,
} from 'class-validator';

export class CreateTimeCardInput {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @Type(() => Date)
  @IsDate()
  @MinDate(new Date())
  @IsNotEmpty()
  @Transform(({ value, obj }) => {
    const startDate = new Date(new Date(value).setHours(0, 0, 0, 0));
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 15);
    obj.periodEnd = endDate;
    return startDate;
  })
  periodStart: string;

  @Type(() => Date)
  @IsDate()
  periodEnd: string;
}

export class UpdateTimeCardInput {
  @IsOptional()
  @IsNumber()
  userId?: number;

  @Type(() => Date)
  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(new Date(value).setHours(0, 0, 0, 0)))
  periodStart?: string;

  @Type(() => Date)
  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(new Date(value).setHours(0, 0, 0, 0)))
  periodEnd?: string;
}
