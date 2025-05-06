import { Request } from 'express';

import { ProgrammingLanguageResponseDto } from '../modules/programming-language/dtos';
import { TechnologyResponseDto } from '../modules/technology/dtos';

export interface IRequest extends Request {
  programmingLanguages?: ProgrammingLanguageResponseDto[],
  technologies?: TechnologyResponseDto[],
}