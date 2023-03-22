import { Controller, Post, Body, HttpCode } from '@nestjs/common'
import { AppService } from './app.service'
import { PingRequestResponse, PingRequestBody } from './dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/ping')
  @HttpCode(200)
  ping(@Body() pingRequstBody: PingRequestBody): Promise<PingRequestResponse> {
    return this.appService.ping(pingRequstBody.message)
  }
}
