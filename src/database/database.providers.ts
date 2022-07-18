import mongoose from "mongoose";
import { ActionEntity } from "src/action/entities/action.entity";
import { SYS_ACTION_API } from "src/action/entities/sys_action_api.entity";
import { DataSource } from "typeorm";


export const databaseProviders = [
  {
    provide: 'MONGO_CONNECTION_TEST',
    useFactory: async (): Promise<any> =>
      await mongoose.createConnection(`${process.env.HOST_MONGO_TEST}`),

  },
  {
    provide: 'MONGO_CONNECTION_TEST2',
    useFactory: async (): Promise<any> =>
      await mongoose.createConnection(`${process.env.HOST_MONGO_TEST2}`),
  },

  {
    provide: 'ORACLE_CONNECTION_TEST',
    useFactory: async () => {
      const dataSource = new DataSource({
        name: 'test',
        type: 'oracle',
        host: process.env.HOST_ORACLE_TEST,
        port: parseInt(process.env.HOST_ORACLE_PORT),
        username: process.env.HOST_ORACLE_USERNAME,
        password: process.env.HOST_ORACLE_PASSWORD,
        database: process.env.HOST_ORACLE_DATABSE,
        serviceName: process.env.HOST_ORACLE_SERVICE_NAME,
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false,
        // extra: {
        //   trustServerCertificate: true,
        //   Encrypt: true,
        //   IntegratedSecurity: false,
        // }
      });
      // console.log('dataSource23', dataSource)
      return dataSource.initialize();

    }
  }
];
