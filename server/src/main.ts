// import * as path from 'path'
// import * as dotenv from 'dotenv'

import { NestFactory } from '@nestjs/core'
import { AppModule } from 'src/app.module'

// dotenv.config({ path: path.join(__dirname, '..', '..', 'config', process.env.MODE + '.env') })

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	await app.listen(3080)
	// await app.listen(process.env.BACKEND_PORT)
}

bootstrap()
