import { IsNotEmpty, IsString } from 'class-validator';
import { CommonFieldsDto } from '../../../dtos';

export class ProgrammingLanguageResponseDto extends CommonFieldsDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}