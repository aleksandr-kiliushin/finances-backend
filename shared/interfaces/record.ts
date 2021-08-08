export interface ICategory {
  id: number;
  name: string;
  type: "expence" | "income";
}

export interface IRecord {
  amount: number;
  category: ICategory;
  date: string;
  id: number;
  isTrashed: boolean;
}
