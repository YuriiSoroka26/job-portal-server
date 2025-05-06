import { IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class PaginationDto {
  @IsNumber()
  @ApiProperty()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  page?: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  limit?: number;
}