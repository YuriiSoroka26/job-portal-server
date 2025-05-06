import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyEntity } from './entity/company.entity';
import { CompanySeed } from './seeds/company.seed';
import { CompanyController } from './company.controller';
import { CompanyService } from './services/company.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity])],
  providers: [CompanySeed, CompanyService],
  controllers: [CompanyController],
  exports: [CompanySeed],
})
export class CompanyModule {}