import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  nAme?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
