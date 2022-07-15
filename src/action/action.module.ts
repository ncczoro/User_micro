import { ActionService } from './action.service';
import { ActionController } from './action.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { actionProviders } from './action.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [
        ActionController,],
    providers: [
        ActionService, ...actionProviders],
})
export class ActionModule { }
