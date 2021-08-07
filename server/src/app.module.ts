import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RecordController } from 'src/record/record.controller'
import { RecordService } from 'src/record/record.service'
import { RecordModule } from 'src/record/record.module'
import ormconfig from 'src/config/ormconfig'
import { Record } from './record/record.entity'

//todo: configure nest-cli to remove the dist folder before compiling.
@Module({
	imports: [TypeOrmModule.forRoot(ormconfig), TypeOrmModule.forFeature([Record]), RecordModule],
	controllers: [RecordController],
	providers: [RecordService],
})
export class AppModule {}
