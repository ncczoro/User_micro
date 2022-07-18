/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ActionEntity } from './entities/action.entity';
import { SYS_ACTION_API } from './entities/sys_action_api.entity';

@Injectable()
export class ActionService {
    constructor(
        @Inject('ACTION_REPOSITORY')
        private actionRepository: Repository<SYS_ACTION_API>
    ) { }

    async findAll(): Promise<SYS_ACTION_API[]> {
        return this.actionRepository.find();
    }
}
