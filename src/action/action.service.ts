/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ActionEntity } from './action.entity';

@Injectable()
export class ActionService {
    constructor(
        @Inject('ACTION_REPOSITORY')
        private actionRepository: Repository<ActionEntity>
    ) { }

    async findAll(): Promise<ActionEntity[]> {
        return this.actionRepository.find();
    }
}
