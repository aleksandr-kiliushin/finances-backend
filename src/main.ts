import { NestFactory } from '@nestjs/core'

import { AppModule } from 'src/app.module'
import corsConfig from 'src/config/cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors(corsConfig)
  app.setGlobalPrefix('api')
  await app.listen(process.env.BACKEND_PORT)
}

bootstrap()
