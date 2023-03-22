import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'

describe('AppController', () => {
  let appController: AppController
  let configService: ConfigService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      controllers: [AppController],
      providers: [AppService]
    }).compile()

    appController = app.get<AppController>(AppController)

    configService = app.get<ConfigService>(ConfigService)
  })

  describe('root', () => {
    it('should return echo from Postman', async () => {
      expect(await appController.ping('some message')).toBe({
        echo: {
          args: {
            message: 'some message'
          },
          headers: {
            'x-forwarded-proto': 'https',
            'x-forwarded-port': '443',
            host: 'postman-echo.com',
            'x-amzn-trace-id': 'Root=1-641b3adf-0851313f2a29e8514e114e33',
            accept: 'application/json, text/plain, */*',
            'user-agent': 'axios/1.3.4',
            'accept-encoding': 'gzip, compress, deflate, br'
          },
          url: 'https://postman-echo.com/get?message=some%20message'
        },
        timestamp: 1679506143526,
        env: configService.get<string>('ENVIRONMENT'),
        version: configService.get<string>('BUILD_VERSION')
      })
    })
  })
})
