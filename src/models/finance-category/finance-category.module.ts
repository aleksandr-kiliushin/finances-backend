import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { FinanceCategoryTypeModule } from "#models/finance-category-type/finance-category-type.module"
import { FinanceCategoryController } from "./finance-category.controller"
import { FinanceCategoryService } from "./finance-category.service"
import { FinanceCategoryEntity } from "./entities/finance-category.entity"

@Module({
  exports: [FinanceCategoryService],
  imports: [TypeOrmModule.forFeature([FinanceCategoryEntity]), FinanceCategoryTypeModule],
  providers: [FinanceCategoryController, FinanceCategoryService],
  controllers: [FinanceCategoryController],
})
export class FinanceCategoryModule {}
