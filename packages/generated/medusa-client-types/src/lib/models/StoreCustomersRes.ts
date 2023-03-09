/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

import type { Customer } from "./Customer"

export interface StoreCustomersRes {
  customer: SetRequired<Customer, "shipping_addresses" | "billing_address">
}
