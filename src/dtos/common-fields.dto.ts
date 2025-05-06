import { IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CommonFieldsDto {
  @IsNumber()
  @Min(1)
  @ApiProperty({ minimum: 1 })
  id: number;

  @IsString()
  @ApiProperty()
  createdAt: Date;

  @IsString()
  @ApiProperty()
  updatedAt: Date;
}