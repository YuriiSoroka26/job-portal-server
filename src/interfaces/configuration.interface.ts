import {ConfigService} from "@nestjs/config/dist/config.service";

export interface IConfiguration extends  ConfigService {
    port: number;
    database: {
        host: string;
        port: number;
        password: string;
        user: string;
        db: string
    }
}