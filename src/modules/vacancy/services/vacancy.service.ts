import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';

import { VacancyEntity } from '../entity/vacancy';
import { CreateNewVacancyDto, UpdateOneVacancyDto, VacancyResponseDto } from '../dtos';
import { PaginationDto } from '../../../dtos';
import { FilterVacancyDto } from '../dtos/filter-vacancy.dto';
import {LevelEnum, RoleEnum} from "../enums";
import {TechnologyEnum} from "../../technology/enums";
import {ProgrammingLanguageEnum} from "../../programming-language/enums";

@Injectable()
export class VacancyService {
  constructor(@InjectRepository(VacancyEntity)
  private readonly vacancyRepository: Repository<VacancyEntity>) {
  }
  public async createOne(createNewVacancyDto: CreateNewVacancyDto): Promise<VacancyResponseDto> {
    const vacancyEntity = await this.vacancyRepository.create(createNewVacancyDto);
    return await this.vacancyRepository.save(vacancyEntity);
  }

  public async getAll(query: PaginationDto & FilterVacancyDto & { search: string[] }): Promise<VacancyResponseDto[]> {
    const limit = query.limit ?? 20;
    const page = query.page ?? 1;
    const skip = limit * (page - 1);

    const queryBuilder: SelectQueryBuilder<VacancyEntity> = this.vacancyRepository.createQueryBuilder('vacancy');

    if (query.search?.length) {
      const technologies = [];
      const programmingLanguages = [];

      const sqlQuery = queryBuilder
          .leftJoinAndSelect('vacancy.company', 'company')
          .leftJoinAndSelect('vacancy.programmingLanguages', 'programmingLanguages')
          .leftJoinAndSelect('vacancy.technologies', 'technologies');

      query.search.map((query) => {
        switch (query) {
          case RoleEnum.BACKEND:
          case RoleEnum.FULLSTACK:
          case RoleEnum.FRONTEND:
            sqlQuery.andWhere('vacancy.role = :role', { role: query });
            break;

          case LevelEnum.JUNIOR:
          case LevelEnum.SENIOR:
          case LevelEnum.MIDWEIGHT:
            sqlQuery.andWhere('vacancy.level = :level', { level: query });
            break;

          case TechnologyEnum.ROR:
          case TechnologyEnum.VUE:
          case TechnologyEnum.SASS:
          case TechnologyEnum.DJANGO:
          case TechnologyEnum.REACT:
            technologies.push(query);
            break;

          case ProgrammingLanguageEnum.CSS:
          case ProgrammingLanguageEnum.HTML:
          case ProgrammingLanguageEnum.RUBY:
          case ProgrammingLanguageEnum.PYTHON:
          case ProgrammingLanguageEnum.JAVASCRIPT:
            programmingLanguages.push(query);
        }
      });

      if (programmingLanguages.length > 0) {
        sqlQuery.andWhere('programmingLanguages.name IN (:...programmingLanguages)', { programmingLanguages });
      }

      if (technologies.length > 0) {
        sqlQuery.andWhere('technologies.name IN (:...technologies)', { technologies });
      }

      const result = await sqlQuery.skip(skip).take(limit).getMany();
      return result;
    }

    if (query.role) {
      queryBuilder.andWhere('vacancy.role = :role', { role: query.role });
    }

    if (query.level) {
      queryBuilder.andWhere('vacancy.level = :level', { level: query.level });
    }

    if (query.technologies) {
      queryBuilder.leftJoinAndSelect('vacancy.technologies', 'technology')
        .andWhere('technology.name IN (:...technologies)', { technologies: [query.technologies] });
    }

    if (query.programmingLanguages) {
      queryBuilder.leftJoinAndSelect('vacancy.programmingLanguages', 'programmingLanguage')
        .andWhere('programmingLanguage.name IN (:...programmingLanguages)', { programmingLanguages: [query.programmingLanguages] });
    }

    return await queryBuilder
      .skip(skip)
      .take(limit)
      .leftJoinAndSelect('vacancy.company', 'company')
      .leftJoinAndSelect('vacancy.programmingLanguages', 'programmingLanguages')
      .leftJoinAndSelect('vacancy.technologies', 'technologies')
      .getMany();
  }

  public async updateOne(id: number, updateOneVacancyDto: UpdateOneVacancyDto): Promise<VacancyResponseDto> {
    await this.vacancyRepository.update({ id }, updateOneVacancyDto);
    return await this.vacancyRepository.findOne({ where: { id } });
  }

  public async deleteOne(id: number): Promise<void> {
    await this.vacancyRepository.delete({ id });
  }
}