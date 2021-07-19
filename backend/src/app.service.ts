import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('job-queue') private jobQueue: Queue) {

  }
  getHello(): string {
    return 'Hello World!';
  }

  async doTheJob(userId)  {
    var result = await this.jobQueue.add({"userId": userId});
    return result;
  }
}
