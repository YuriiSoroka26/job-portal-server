import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TechnologyEntity } from '../entity/technology.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class TechnologyService {
  constructor(
    @InjectRepository(TechnologyEntity)
    private readonly technologyRepository: Repository<TechnologyEntity>
  ) {
  }

  public async getOne(options: FindManyOptions<TechnologyEntity> | undefined): Promise<TechnologyEntity | undefined> {
    return await this.technologyRepository.findOne(options);
  }
}