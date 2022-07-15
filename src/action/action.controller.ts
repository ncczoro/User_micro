/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { ActionEntity } from './action.entity';
import { ActionService } from './action.service';

@Controller()
export class ActionController {
    constructor(private readonly actionService: ActionService) {

    }

    @Get()
    findAll(): Promise<ActionEntity[]> {
        return this.actionService.findAll();
    }
}
