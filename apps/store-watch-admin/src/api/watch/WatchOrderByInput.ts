import { SortOrder } from "../../util/SortOrder";

export type WatchOrderByInput = {
  brand?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  stock?: SortOrder;
  updatedAt?: SortOrder;
};
