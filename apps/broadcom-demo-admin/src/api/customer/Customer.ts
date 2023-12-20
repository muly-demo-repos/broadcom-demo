import { Order } from "../order/Order";

export type Customer = {
  address: string | null;
  createdAt: Date;
  id: string;
  nAme: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
