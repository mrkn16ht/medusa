/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

import type { Region } from "./Region"

export interface StoreRegionsRes {
  region: SetRequired<
    Region,
    "countries" | "payment_providers" | "fulfillment_providers"
  >
}
