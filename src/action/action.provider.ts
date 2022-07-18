import { DataSource } from "typeorm";
import { ActionEntity } from "./entities/action.entity";
import { SYS_ACTION_API } from "./entities/sys_action_api.entity";

export const actionProviders = [
    {
        provide: 'ACTION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(SYS_ACTION_API),
        inject: ['ORACLE_CONNECTION_TEST']
    }
]