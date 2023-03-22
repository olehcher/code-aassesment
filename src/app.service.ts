import { Injectable } from '@nestjs/common'
import axios from 'axios'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  async ping(message): Promise<any> {
    const { data } = await axios.get('https://postman-echo.com/get?message=' + message)

    return {
      echo: data,
      timestamp: Date.now(),
      env: this.configService.get<string>('ENVIRONMENT'),
      version: this.configService.get<string>('BUILD_VERSION')
    }
  }
}
