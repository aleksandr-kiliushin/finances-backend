import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

import { FinanceCategoryTypeEntity } from "#models/finance-category-type/entities/finance-category-type.entity"
import { IFinanceCategory } from "#interfaces/finance"

@Entity("finance_category")
export class FinanceCategoryEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: IFinanceCategory["id"]

  @Column({ type: "varchar" })
  name: IFinanceCategory["name"]

  @ManyToOne(() => FinanceCategoryTypeEntity)
  type: FinanceCategoryTypeEntity
}
