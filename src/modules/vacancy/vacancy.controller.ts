import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus, Param, ParseIntPipe, Patch,
  Post, Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateNewVacancyDto, CreateOneVacancyDto, UpdateOneVacancyDto, VacancyResponseDto } from './dtos';
import { VacancyService } from './services/vacancy.service';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ProgrammingLanguageExistGuard } from '../programming-language/guards/programming-language-exist.guard';
import { IRequest } from '../../interfaces';
import { TechnologiesExistGuard } from '../technology/guards/technologies-exist.guard';
import { PaginationDto } from '../../dtos';
import { FilterVacancyDto } from './dtos/filter-vacancy.dto';

@Controller('vacancies')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {
  }

  @ApiResponse({ status: HttpStatus.CREATED, type: [VacancyResponseDto] })
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(ProgrammingLanguageExistGuard, TechnologiesExistGuard)
  @Post()
  public async createOne(
    @Body() createOneVacancyDto: CreateOneVacancyDto,
    @Req() { programmingLanguages, technologies }: IRequest,
    ): Promise<any> {
    try {
      return await this.vacancyService.createOne(
        CreateNewVacancyDto.toDo(createOneVacancyDto, technologies, programmingLanguages));
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }

  @ApiResponse({ status: HttpStatus.OK, type: [VacancyResponseDto] })
  @ApiQuery({ type: PaginationDto })
  @ApiQuery({ type: FilterVacancyDto })
  @Get()
  public async getAll(@Query() query: PaginationDto & FilterVacancyDto & { search: string[] }): Promise<VacancyResponseDto[]> {
    try {
      return await this.vacancyService.getAll(query);
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }

  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: [VacancyResponseDto] })
  @Patch(':id')
  public async updateOne(
    @Body() updateVacancy: UpdateOneVacancyDto,
    @Param('id', ParseIntPipe) id: number
  ): Promise<VacancyResponseDto> {
    try {
      return await this.vacancyService.updateOne(id, updateVacancy);
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  @Delete(':id')
  public async deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      await this.vacancyService.deleteOne(id);
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
}