import { Entity, Column, OneToMany } from 'typeorm';

import { CommonFieldsEntity } from '../../../database';
import { VacancyEntity } from '../../vacancy/entity/vacancy';

@Entity({ name: 'company' })
export class CompanyEntity extends CommonFieldsEntity {
  @Column({ length: 500 })
  name: string;

  @Column()
  avatar: string;

  @OneToMany(() => VacancyEntity, (vacancy) => vacancy.company)
  vacancies: VacancyEntity[]
}