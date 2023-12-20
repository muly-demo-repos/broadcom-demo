import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "nAme";

export const CustomerTitle = (record: TCustomer): string => {
  return record.nAme?.toString() || String(record.id);
};
