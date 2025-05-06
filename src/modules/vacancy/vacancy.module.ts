import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VacancyEntity } from './entity/vacancy';
import { VacancyController } from './vacancy.controller';
import { VacancyService } from './services/vacancy.service';
import { ProgrammingLanguageModule } from '../programming-language/programming-language.module';
import { TechnologyModule } from '../technology/technology.module';
import { VacancySeed } from './seeds/vacancy.seed';

@Module({
  imports: [TypeOrmModule.forFeature([VacancyEntity]), ProgrammingLanguageModule, TechnologyModule],
  controllers: [VacancyController],
  providers: [VacancyService, VacancySeed],
  exports: [VacancySeed],
})
export class VacancyModule {}