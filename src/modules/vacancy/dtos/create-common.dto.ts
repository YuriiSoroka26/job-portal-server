import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { EmploymentTypeEnum, LevelEnum, LocationEnum, RoleEnum } from '../enums';

export class CreateCommonDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ minimum: 1 })
  companyId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsEnum(RoleEnum)
  @IsNotEmpty()
  @ApiProperty({ enum: RoleEnum })
  role: RoleEnum

  @IsEnum(LevelEnum)
  @IsNotEmpty()
  @ApiProperty({ enum: LevelEnum })
  level: LevelEnum

  @IsEnum(LocationEnum)
  @IsNotEmpty()
  @ApiProperty({ enum: LocationEnum })
  location: LocationEnum

  @IsEnum(EmploymentTypeEnum)
  @IsNotEmpty()
  @ApiProperty({ enum: EmploymentTypeEnum })
  employment_type: EmploymentTypeEnum
}