import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EmploymentTypeEnum, LevelEnum, LocationEnum, RoleEnum } from '../enums';
import { TechnologyEnum } from '../../technology/enums';
import { ProgrammingLanguageEnum } from '../../programming-language/enums';
import { ProgrammingLanguageResponseDto } from '../../programming-language/dtos';
import { CreateNewVacancyDto } from './create-new-vacancy.dto';
import { CreateCommonDto } from './create-common.dto';

export class CreateOneVacancyDto extends CreateCommonDto {
  @IsArray()
  @IsEnum(ProgrammingLanguageEnum, { each: true })
  @IsNotEmpty()
  @ApiProperty({ enum: ProgrammingLanguageEnum, isArray: true })
  programmingLanguages: ProgrammingLanguageEnum[];

  @IsArray()
  @IsEnum(TechnologyEnum, { each: true })
  @IsNotEmpty()
  @ApiProperty({ enum: TechnologyEnum, isArray: true })
  technologies: TechnologyEnum[];
}