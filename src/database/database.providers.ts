import mongoose from "mongoose";


export const databaseProviders = [
  {
    provide: 'MONGO_CONNECTION_TEST',
    useFactory: async (): Promise<any> =>
      await mongoose.createConnection(`mongodb://${process.env.LOG_DB_HOST}:${process.env.LOG_DB_PORT}/test`),
      
  },
  {
    provide: 'MONGO_CONNECTION_TEST2',
    useFactory: async (): Promise<any> =>
      await mongoose.createConnection(`mongodb://${process.env.LOG_DB_HOST}:${process.env.LOG_DB_PORT}/test2`),
  },
];
