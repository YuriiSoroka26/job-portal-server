import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from "path";

import configuration from "./config/configuration";
import { VacancyModule } from './modules/vacancy/vacancy.module';
import { TechnologyModule } from './modules/technology/technology.module';
import { ProgrammingLanguageModule } from './modules/programming-language/programming-language.module';
import { CompanyModule } from './modules/company/company.module';
import {VacancySeed} from "./modules/vacancy/seeds/vacancy.seed";
import {TechnologySeed} from "./modules/technology/seeds/technology.seed";
import {ProgrammingLanguageSeed} from "./modules/programming-language/seeds/programming-language.seed";
import {CompanySeed} from "./modules/company/seeds/company.seed";

@Module({
  imports: [
      ConfigModule.forRoot({
          load: [configuration],
          isGlobal: true,
          envFilePath: '.env'
      }),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => ({
              type: 'postgres',
              host: configService.get<string>('database.host'),
              port: configService.get<number>('database.port'),
              username: configService.get<string>('database.user'),
              password: configService.get<string>('database.password'),
              synchronize: true,
              autoLoadEntities: true,
              database: configService.get<string>('database.db'),
              entities: [path.join(__dirname, '**', '*.entity{.js,.ts}')],
          }),
          inject: [ConfigService],
      }),
      VacancyModule,
      TechnologyModule,
      ProgrammingLanguageModule,
      CompanyModule
  ],
})
export class AppModule {
    constructor(
        private readonly vacancySeed: VacancySeed,
        private readonly technologySeed: TechnologySeed,
        private readonly programingLanguageSeed: ProgrammingLanguageSeed,
        private readonly companySeed: CompanySeed
    ) {}

    async onModuleInit(): Promise<void> {
        await this.companySeed.seed();
        await this.technologySeed.seed();
        await this.programingLanguageSeed.seed();

        await this.vacancySeed.seed();
    }
}
