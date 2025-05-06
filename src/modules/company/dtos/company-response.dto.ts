import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CommonFieldsDto } from '../../../dtos';
import { CompanyEntity } from '../entity/company.entity';

export class CompanyResponseDto extends CommonFieldsDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  avatar: string;

  static toDto(companyEntity: CompanyEntity): CompanyResponseDto {
    const companiesResponseDto = new CompanyResponseDto();

    companiesResponseDto.id = companyEntity.id;
    companiesResponseDto.name = companyEntity.name;
    companiesResponseDto.updatedAt = companyEntity.updatedAt;
    companiesResponseDto.createdAt = companyEntity.createdAt;
    companiesResponseDto.avatar = companyEntity.avatar;

    return companiesResponseDto;
  }
}