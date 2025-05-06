import { BadRequestException, CanActivate, ExecutionContext, HttpException, Injectable } from '@nestjs/common';

import { technologyErrorConstant } from '../constants';
import { IRequest } from '../../../interfaces';
import { CreateOneVacancyDto } from '../../vacancy/dtos';
import { TechnologyService } from '../services/technology.service';
import { TechnologyErrorEnum } from '../enums';

@Injectable()
export class TechnologiesExistGuard implements CanActivate {
  constructor(private readonly technologyService: TechnologyService ) {
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const req = context.switchToHttp().getRequest() as IRequest;
      const body = req.body as CreateOneVacancyDto;

      const technologies = body.technologies;

      if (!Array.isArray(technologies)) {
        throw new BadRequestException();
      }

      const foundTechnologies = await Promise.all(
        technologies.map(async (languageName) => {
          return await this.technologyService.getOne({ where: { name: languageName } });
        })
      );

      const allExist = foundTechnologies.every(language => !!language);

      if (!allExist) {
        throw new BadRequestException(technologyErrorConstant[TechnologyErrorEnum.NOT_FOUNT]);
      }

      req.technologies = foundTechnologies;

      return true;
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
}