import { DataSource } from "typeorm";
import { ActionEntity } from "./action.entity";

export const actionProviders = [
    {
        provide: 'ACTION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ActionEntity),
        inject: ['ORACLE_CONNECTION_TEST']
    }
]