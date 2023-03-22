import { Controller, Post, Body, HttpCode } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/ping')
  @HttpCode(200)
  ping(@Body('message') message): Promise<any> {
    return this.appService.ping(message)
  }
}
