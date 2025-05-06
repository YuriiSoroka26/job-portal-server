import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { CompanyService } from './services/company.service';
import { CompanyResponseDto } from './dtos';

@ApiTags('companies')
@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {
  }

  @ApiResponse({ status: HttpStatus.OK, type: [CompanyResponseDto] })
  @Get()
  public async getAll(): Promise<CompanyResponseDto[]> {
    try {
      return await this.companyService.getAll();
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
}