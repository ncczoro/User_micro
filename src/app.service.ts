import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  constructor() {

  }
  getHello(): string {
    return `Hello from user service! mongodb://${process.env.LOG_DB_HOST}:${process.env.LOG_DB_PORT}`;
  }
}
