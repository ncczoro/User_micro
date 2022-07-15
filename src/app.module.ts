import { LayoutModule } from './layout/layout.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // ConfigModule.forRoot({ envFilePath: '.user.env' }),
    // MongooseModule.forRoot(`mongodb://${process.env.LOG_DB_HOST}:${process.env.LOG_DB_PORT}/test`, 
    // {connectionName: 'test'}),
    // MongooseModule.forRoot(`mongodb://${process.env.LOG_DB_HOST}:${process.env.LOG_DB_PORT}/test2`, 
    // {connectionName: 'test2'}),
    LayoutModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
