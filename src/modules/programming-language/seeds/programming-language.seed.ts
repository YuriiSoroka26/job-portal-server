import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ProgrammingLanguageEntity } from '../entity/programming-language.entity';
import { ProgrammingLanguageEnum } from '../enums';

@Injectable()
export class ProgrammingLanguageSeed {
  constructor(private readonly dataSource: DataSource) {}

  async seed(): Promise<void> {
    const programmingLanguageRepository = await this.dataSource.getRepository(ProgrammingLanguageEntity);

    const existingProgrammingLanguages = await programmingLanguageRepository.find() as ProgrammingLanguageEntity[];

    if (existingProgrammingLanguages.length === 0) {
      const programmingLanguagesToCreate = [
        { name: ProgrammingLanguageEnum.PYTHON },
        { name: ProgrammingLanguageEnum.RUBY },
        { name: ProgrammingLanguageEnum.JAVASCRIPT },
        { name: ProgrammingLanguageEnum.HTML },
        { name: ProgrammingLanguageEnum.CSS },
      ];

      await Promise.all(
        programmingLanguagesToCreate.map(async (programmingLanguageData) => {
          const programmingLanguage = programmingLanguageRepository.create(programmingLanguageData);
          await programmingLanguageRepository.save(programmingLanguage);
        }),
      );
    } else {
      console.log('Programming languages already exist in the database');
    }
  }
}
