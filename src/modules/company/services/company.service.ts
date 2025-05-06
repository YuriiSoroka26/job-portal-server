import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CompanyEntity } from '../entity/company.entity';
import { CompanyResponseDto } from '../dtos';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private companyRepository: Repository<CompanyEntity>) {
  }

  public async getAll(): Promise<CompanyResponseDto[]> {
    const companies = await this.companyRepository.find();
    return companies.map(company => CompanyResponseDto.toDto(company));
  }
}