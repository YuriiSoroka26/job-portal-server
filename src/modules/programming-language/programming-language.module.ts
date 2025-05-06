import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProgrammingLanguageEntity } from './entity/programming-language.entity';
import { ProgrammingLanguageSeed } from './seeds/programming-language.seed';
import { ProgrammingLanguageService } from './services/programming-language.service';
import { ProgrammingLanguageExistGuard } from './guards/programming-language-exist.guard';

@Module({
  imports: [TypeOrmModule.forFeature([ProgrammingLanguageEntity])],
  providers: [ProgrammingLanguageSeed, ProgrammingLanguageService, ProgrammingLanguageExistGuard],
  exports: [ProgrammingLanguageExistGuard, ProgrammingLanguageService, ProgrammingLanguageSeed],
})
export class ProgrammingLanguageModule {}