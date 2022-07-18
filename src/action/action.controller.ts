/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { ActionEntity } from './entities/action.entity';
import { ActionService } from './action.service';
import { SYS_ACTION_API } from './entities/sys_action_api.entity';

@Controller('SYS_ACTION_API')
export class ActionController {
    constructor(private readonly actionService: ActionService) {

    }

    @Get()
    findAll(): Promise<SYS_ACTION_API[]> {
        return this.actionService.findAll();
    }
}
