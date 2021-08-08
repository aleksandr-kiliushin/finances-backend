import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RecordController } from 'src/record/record.controller'
import { RecordService } from 'src/record/record.service'
import { RecordModule } from 'src/record/record.module'
import ormconfig from 'src/config/ormconfig'

// typeorm
import { Category } from 'src/record/category.entity'
import { Record } from 'src/record/record.entity'

@Module({
	imports: [
		TypeOrmModule.forRoot(ormconfig),
		TypeOrmModule.forFeature([Category, Record]),
		RecordModule,
	],
	controllers: [RecordController],
	providers: [RecordService],
})
export class AppModule {}
