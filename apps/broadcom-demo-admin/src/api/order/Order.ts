import { Customer } from "../customer/Customer";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  details: string | null;
  id: string;
  price: number | null;
  updatedAt: Date;
};
