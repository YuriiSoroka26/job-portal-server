import { Column, Entity } from 'typeorm';
import { CommonFieldsEntity } from '../../../database';

@Entity({ name: 'programming_language' })
export class ProgrammingLanguageEntity extends CommonFieldsEntity {
  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  name: string;
}