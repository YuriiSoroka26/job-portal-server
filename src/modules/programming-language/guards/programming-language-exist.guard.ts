import { BadRequestException, CanActivate, ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { ProgrammingLanguageService } from '../services/programming-language.service';
import { programmingLanguageErrorConstant } from '../constants';
import { ProgrammingLanguageErrorEnum } from '../enums';
import { ProgrammingLanguageResponseDto } from '../dtos';
import { IRequest } from '../../../interfaces';
import { CreateOneVacancyDto } from '../../vacancy/dtos';

@Injectable()
export class ProgrammingLanguageExistGuard implements CanActivate {
  constructor(private readonly programmingLanguageService: ProgrammingLanguageService ) {
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const req = context.switchToHttp().getRequest() as IRequest;
      const body = req.body as CreateOneVacancyDto;

      const programmingLanguages = body.programmingLanguages;

      if (!Array.isArray(programmingLanguages)) {
        throw new BadRequestException();
      }

      const foundProgrammingLanguages = await Promise.all(
        programmingLanguages.map(async (languageName) => {
          return await this.programmingLanguageService.getOne({ where: { name: languageName } });
        })
      );

      const allLanguagesExist = foundProgrammingLanguages.every(language => !!language);

      if (!allLanguagesExist) {
        throw new BadRequestException(programmingLanguageErrorConstant[ProgrammingLanguageErrorEnum.NOT_FOUNT]);
      }

      req.programmingLanguages = foundProgrammingLanguages;

      return true;
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
}