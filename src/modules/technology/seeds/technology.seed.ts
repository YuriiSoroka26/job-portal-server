import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TechnologyEntity } from '../entity/technology.entity';
import { TechnologyEnum } from '../enums';

@Injectable()
export class TechnologySeed {
  constructor(private readonly dataSource: DataSource) {}

  async seed(): Promise<void> {
    const technologyRepository = await this.dataSource.getRepository(TechnologyEntity);

    const existingTechnologies = await technologyRepository.find() as TechnologyEntity[];

    if (existingTechnologies.length === 0) {
      const programmingLanguagesToCreate = [
        { name: TechnologyEnum.REACT },
        { name: TechnologyEnum.SASS },
        { name: TechnologyEnum.VUE },
        { name: TechnologyEnum.DJANGO },
        { name: TechnologyEnum.ROR },
      ];

      await Promise.all(
        programmingLanguagesToCreate.map(async (programmingLanguageData) => {
          const programmingLanguage = technologyRepository.create(programmingLanguageData);
          await technologyRepository.save(programmingLanguage);
        }),
      );
    } else {
      console.log('Technologies already exist in the database');
    }
  }
}
