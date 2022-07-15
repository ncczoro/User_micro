import { databaseProviders } from './database.providers';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.user.env' }),
    ],
    providers: [
        ...databaseProviders,],
    exports: [...databaseProviders]
})
export class DatabaseModule { }
