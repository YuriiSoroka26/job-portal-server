import { IsNotEmpty, IsString } from 'class-validator';
import { CommonFieldsDto } from '../../../dtos';

export class TechnologyResponseDto extends CommonFieldsDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}