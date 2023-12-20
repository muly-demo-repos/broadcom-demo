import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  email?: string | null;
  nAme?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
