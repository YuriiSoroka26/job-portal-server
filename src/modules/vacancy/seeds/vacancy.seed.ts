import {Injectable} from '@nestjs/common';
import {DataSource} from 'typeorm';

import { VacancyEntity } from '../entity/vacancy';
import { EmploymentTypeEnum, LevelEnum, LocationEnum, RoleEnum} from '../enums';
import { ProgrammingLanguageEnum } from '../../programming-language/enums';
import { TechnologyEnum } from '../../technology/enums';

@Injectable()
export class VacancySeed {
    constructor(private readonly dataSource: DataSource) {}

    async seed(): Promise<void> {
        const vacancyRepository = await this.dataSource.getRepository(VacancyEntity);

        const existingVacancy = await vacancyRepository.find() as VacancyEntity[];

        if (existingVacancy.length === 0) {
            const vacancyToCreate = [
                {
                    companyId: 1,
                    title: 'Senior Fullstack developer',
                    role: RoleEnum.FULLSTACK,
                    level: LevelEnum.SENIOR,
                    location: LocationEnum.USA_ONLY,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 1 },
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                    ],
                    technologies: [
                        { id: 1 },
                        { id: 2 },
                        { id: 3 },
                    ]
                },
                {
                    companyId: 2,
                    title: 'Junior Backend developer',
                    role: RoleEnum.BACKEND,
                    level: LevelEnum.JUNIOR,
                    location: LocationEnum.REMOTE,
                    employment_type: EmploymentTypeEnum.PART_TIME,
                    programmingLanguages: [
                        { id: 2 },
                    ],
                    technologies: [
                        { id: 5 },
                    ]
                },
                {
                    companyId: 3,
                    title: 'Senior Frontend developer',
                    role: RoleEnum.FRONTEND,
                    level: LevelEnum.SENIOR,
                    location: LocationEnum.USA_ONLY,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                    ],
                    technologies: [
                        { id: 2 },
                        { id: 3 },
                        { id: 5 },
                    ]
                },
                {
                    companyId: 1,
                    title: 'Senior Fullstack developer',
                    role: RoleEnum.FULLSTACK,
                    level: LevelEnum.SENIOR,
                    location: LocationEnum.WORLD,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 1 },
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                    ],
                    technologies: [
                        { id: 1 },
                        { id: 3 },
                        { id: 4 },
                    ]
                },
                {
                    companyId: 1,
                    title: 'Midweight backend developer',
                    role: RoleEnum.BACKEND,
                    level: LevelEnum.MIDWEIGHT,
                    location: LocationEnum.REMOTE,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 1 },
                    ],
                    technologies: [
                        { id: 4 },
                    ]
                },
                {
                    companyId: 2,
                    title: 'Software Engineer $2000 ',
                    role: RoleEnum.FULLSTACK,
                    level: LevelEnum.MIDWEIGHT,
                    location: LocationEnum.USA_ONLY,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 1 },
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                    ],
                    technologies: [
                        { id: 3 },
                        { id: 4 },
                    ]
                },
                {
                    companyId: 3,
                    title: 'Middle Full Stack Web Developer',
                    role: RoleEnum.FULLSTACK,
                    level: LevelEnum.MIDWEIGHT,
                    location: LocationEnum.USA_ONLY,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 2 },
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                    ],
                    technologies: [
                        { id: 1 },
                        { id: 5 },
                    ]
                },
                {
                    companyId: 3,
                    title: 'Backend Developer',
                    role: RoleEnum.BACKEND,
                    level: LevelEnum.JUNIOR,
                    location: LocationEnum.WORLD,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 1 },
                    ],
                    technologies: [
                        { id: 4 },
                    ]
                },
                {
                    companyId: 3,
                    title: 'Backend Developer',
                    role: RoleEnum.BACKEND,
                    level: LevelEnum.MIDWEIGHT,
                    location: LocationEnum.WORLD,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 1 },
                    ],
                    technologies: [
                        { id: 4 },
                    ]
                },
                {
                    companyId: 2,
                    title: 'Senior Software Engineer ',
                    role: RoleEnum.FRONTEND,
                    level: LevelEnum.SENIOR,
                    location: LocationEnum.USA_ONLY,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                    ],
                    technologies: [
                        { id: 3 },
                    ]
                },
                {
                    companyId: 1,
                    title: 'Senior Software Engineer',
                    role: RoleEnum.FRONTEND,
                    level: LevelEnum.SENIOR,
                    location: LocationEnum.REMOTE,
                    employment_type: EmploymentTypeEnum.PART_TIME,
                    programmingLanguages: [
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                    ],
                    technologies: [
                        { id: 1 },
                        { id: 2 },
                    ]
                },
                {
                    companyId: 1,
                    title: 'Expert JavaScriptDeveloper',
                    role: RoleEnum.FRONTEND,
                    level: LevelEnum.MIDWEIGHT,
                    location: LocationEnum.REMOTE,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 3 },
                    ],
                    technologies: [
                        { id: 1 },
                    ]
                },
                {
                    companyId: 3,
                    title: 'Senior Ruby on Rails Engineer',
                    role: RoleEnum.FULLSTACK,
                    level: LevelEnum.SENIOR,
                    location: LocationEnum.REMOTE,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 2 },
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                    ],
                    technologies: [
                        { id: 5 },
                    ]
                },
                {
                    companyId: 1,
                    title: 'React developer',
                    role: RoleEnum.FRONTEND,
                    level: LevelEnum.JUNIOR,
                    location: LocationEnum.REMOTE,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                    ],
                    technologies: [
                        { id: 1 },
                        { id: 2 },
                    ]
                },
                {
                    companyId: 1,
                    title: 'React developer',
                    role: RoleEnum.FRONTEND,
                    level: LevelEnum.JUNIOR,
                    location: LocationEnum.REMOTE,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                    ],
                    technologies: [
                        { id: 1 },
                    ]
                },
                {
                    companyId: 4,
                    title: 'Junior Fullstack developer',
                    role: RoleEnum.FULLSTACK,
                    level: LevelEnum.JUNIOR,
                    location: LocationEnum.USA_ONLY,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                        { id: 1 },
                    ],
                    technologies: [
                        { id: 1 },
                        { id: 2 },
                        { id: 4 },
                    ]
                },
                {
                    companyId: 4,
                    title: 'Senior Backend developer',
                    role: RoleEnum.BACKEND,
                    level: LevelEnum.SENIOR,
                    location: LocationEnum.USA_ONLY,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 1 },
                    ],
                    technologies: [
                        { id: 4 },
                    ]
                },
                {
                    companyId: 4,
                    title: 'Middle VueJS developer',
                    role: RoleEnum.FRONTEND,
                    level: LevelEnum.MIDWEIGHT,
                    location: LocationEnum.USA_ONLY,
                    employment_type: EmploymentTypeEnum.PART_TIME,
                    programmingLanguages: [
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                    ],
                    technologies: [
                        { id: 3 },
                    ]
                },
                {
                    companyId: 4,
                    title: 'Senior Ruby',
                    role: RoleEnum.BACKEND,
                    level: LevelEnum.SENIOR,
                    location: LocationEnum.USA_ONLY,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 2 },
                    ],
                    technologies: [
                        { id: 5 },
                    ]
                },
                {
                    companyId: 4,
                    title: 'Python developer',
                    role: RoleEnum.BACKEND,
                    level: LevelEnum.JUNIOR,
                    location: LocationEnum.USA_ONLY,
                    employment_type: EmploymentTypeEnum.FULL_NAME,
                    programmingLanguages: [
                        { id: 1 },
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                    ],
                    technologies: [
                        { id: 2 },
                        { id: 4 },
                    ]
                },
            ] as VacancyEntity[];

            await Promise.all(
                vacancyToCreate.map(async (vacancyData) => {
                    const vacancy = vacancyRepository.create(vacancyData);
                    await vacancyRepository.save(vacancy);
                }),
            );
        } else {
            console.log('Vacancies already exist in the database');
        }
    }
}
