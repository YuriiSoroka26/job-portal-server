import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgrammingLanguageEntity } from '../entity/programming-language.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class ProgrammingLanguageService {
  constructor(
    @InjectRepository(ProgrammingLanguageEntity)
    private readonly programmingRepository: Repository<ProgrammingLanguageEntity>) {
  }

  public async getOne(options: FindManyOptions<ProgrammingLanguageEntity> | undefined): Promise<ProgrammingLanguageEntity | undefined> {
    return await this.programmingRepository.findOne(options);
  }
}