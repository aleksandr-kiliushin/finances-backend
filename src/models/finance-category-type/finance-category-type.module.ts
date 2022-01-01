import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FinanceCategoryTypeService } from './finance-category-type.service'
import { FinanceCategoryTypeController } from './finance-category-type.controller'
import { FinanceCategoryTypeEntity } from './entities/finance-category-type.entity'

@Module({
  exports: [FinanceCategoryTypeService],
  imports: [TypeOrmModule.forFeature([FinanceCategoryTypeEntity])],
  providers: [FinanceCategoryTypeController, FinanceCategoryTypeService], // Try to delete.
  controllers: [FinanceCategoryTypeController], // Try to delete.
})
export class FinanceCategoryTypeModule {}
