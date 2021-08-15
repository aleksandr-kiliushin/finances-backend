import { Module } from '@nestjs/common'
import { BarService } from './bar.service'
import { BarResolver } from './bar.resolver'

@Module({
	providers: [BarResolver, BarService],
})
export class BarModule {}
