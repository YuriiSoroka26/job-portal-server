import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TechnologyEntity } from './entity/technology.entity';
import { TechnologySeed } from './seeds/technology.seed';
import { TechnologyService } from './services/technology.service';
import { TechnologiesExistGuard } from './guards/technologies-exist.guard';

@Module({
  imports: [TypeOrmModule.forFeature([TechnologyEntity])],
  providers: [TechnologySeed, TechnologyService, TechnologiesExistGuard],
  exports: [TechnologyService, TechnologiesExistGuard, TechnologySeed]
})
export class TechnologyModule {}