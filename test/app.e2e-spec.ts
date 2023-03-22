import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import { ConfigService } from '@nestjs/config'

describe('AppController (e2e)', () => {
  let app: INestApplication
  let configService: ConfigService

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()

    configService = moduleFixture.get<ConfigService>(ConfigService)
  })

  it('/ping (POST)', () => {
    return request(app.getHttpServer())
      .post('/ping')
      .send({ message: 'some message' })
      .expect(200)
      .expect({
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
