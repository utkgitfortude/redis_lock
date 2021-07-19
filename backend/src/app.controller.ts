import { Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly logger = new Logger(AppController.name)

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/user")
  doUserJob() {
    this.logger.log("req came");
    return this.appService.doTheJob("34");
  }
}
