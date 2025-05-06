import { PartialType } from '@nestjs/swagger';

import { CreateNewVacancyDto } from './create-new-vacancy.dto';

export class UpdateOneVacancyDto extends PartialType(CreateNewVacancyDto) {}