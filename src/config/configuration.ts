import * as process from 'process';

import { IConfiguration } from '../interfaces';

export default (): IConfiguration => <IConfiguration>({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        password: process.env.DATABASE_PASSWORD || 'password',
        user: process.env.DATABASE_USER || 'root',
        db: process.env.DATABASE_DB || 'test',
    }
});