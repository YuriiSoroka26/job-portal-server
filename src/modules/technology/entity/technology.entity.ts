import { Column, Entity } from 'typeorm';

import { CommonFieldsEntity } from '../../../database';

@Entity({ name: 'technology' })
export class TechnologyEntity extends CommonFieldsEntity {
  @Column(
    {
      type: 'varchar',
      nullable: false,
      unique: true,
    }
  )
  name: string;
}