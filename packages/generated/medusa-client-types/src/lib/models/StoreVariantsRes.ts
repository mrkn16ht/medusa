/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

import type { PricedVariant } from "./PricedVariant"

export interface StoreVariantsRes {
  variant: SetRequired<PricedVariant, "prices" | "options" | "product">
}
