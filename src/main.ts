import { NestFactory } from '@nestjs/core'

import { AppModule } from 'src/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.setGlobalPrefix('api')
  await app.listen(process.env.BACKEND_PORT)
}

bootstrap()
