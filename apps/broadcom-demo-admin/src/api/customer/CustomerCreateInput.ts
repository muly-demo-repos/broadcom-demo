import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  email?: string | null;
  nAme?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
