import { ApiProperty } from '@nestjs/swagger';

import { ProgrammingLanguageResponseDto } from '../../programming-language/dtos';
import { TechnologyResponseDto } from '../../technology/dtos';
import { IsArray, ValidateNested } from 'class-validator';
import { CreateCommonDto } from './create-common.dto';
import { CreateOneVacancyDto } from './create-one-vacancy.dto';
import { Type } from 'class-transformer';

export class CreateNewVacancyDto extends CreateCommonDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProgrammingLanguageResponseDto)
  @ApiProperty({ type: [ProgrammingLanguageResponseDto] })
  programmingLanguages: ProgrammingLanguageResponseDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TechnologyResponseDto)
  @ApiProperty({ type: [TechnologyResponseDto] })
  technologies: TechnologyResponseDto[];

  static toDo(
    createOneVacancyDto: CreateOneVacancyDto,
    programmingLanguages: ProgrammingLanguageResponseDto[],
    technologies: TechnologyResponseDto[]
  ): CreateNewVacancyDto {
    const createNewVacancyDto = new CreateNewVacancyDto();

    createNewVacancyDto.technologies = technologies;
    createNewVacancyDto.programmingLanguages = programmingLanguages;
    createNewVacancyDto.title = createOneVacancyDto.title;
    createNewVacancyDto.level = createOneVacancyDto.level;
    createNewVacancyDto.location = createOneVacancyDto.location;
    createNewVacancyDto.role = createOneVacancyDto.role;
    createNewVacancyDto.companyId = createOneVacancyDto.companyId;
    createNewVacancyDto.employment_type = createOneVacancyDto.employment_type;

    return createNewVacancyDto;
  }
}