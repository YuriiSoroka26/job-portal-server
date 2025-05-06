import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

import { CommonFieldsEntity } from '../../../database';
import { RoleEnum, LevelEnum , LocationEnum, EmploymentTypeEnum } from '../enums';
import { TechnologyEntity } from '../../technology/entity/technology.entity';
import { ProgrammingLanguageEntity } from '../../programming-language/entity/programming-language.entity';
import { CompanyEntity } from '../../company/entity/company.entity';

@Entity({ name: 'vacancy' })
export class VacancyEntity extends CommonFieldsEntity {
  @Column({
    type: 'int',
    nullable: false,
  })
  companyId: number;

  @Column({
    nullable: false,
  })
  title: string;

  @Index()
  @Column({ enum: RoleEnum })
  role: RoleEnum;

  @Index()
  @Column({ enum: LevelEnum })
  level: LevelEnum;

  @Index()
  @Column({ enum: LocationEnum })
  location: LocationEnum;

  @Index()
  @Column({
    enum: EmploymentTypeEnum,
    name: 'employment_type',
  })
  employment_type: EmploymentTypeEnum;

  @ManyToOne(() => CompanyEntity)
  @JoinColumn({ name: 'companyId' })
  company: CompanyEntity;

  @ManyToMany(() => ProgrammingLanguageEntity)
  @JoinTable()
  programmingLanguages: ProgrammingLanguageEntity[];

  @ManyToMany(() => TechnologyEntity)
  @JoinTable()
  technologies: TechnologyEntity[];
}