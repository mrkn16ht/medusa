/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

import type { PricedVariant } from "./PricedVariant"

export interface StoreVariantsListRes {
  variants: Array<SetRequired<PricedVariant, "prices" | "options" | "product">>
}
