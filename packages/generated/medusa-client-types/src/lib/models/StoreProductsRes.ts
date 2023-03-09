/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

import type { PricedProduct } from "./PricedProduct"
import type { ProductOption } from "./ProductOption"
import type { ProductVariant } from "./ProductVariant"

export interface StoreProductsRes {
  product: Merge<
    SetRequired<
      PricedProduct,
      "variants" | "options" | "images" | "tags" | "collection" | "type"
    >,
    {
      variants: Array<SetRequired<ProductVariant, "prices" | "options">>
      options: Array<SetRequired<ProductOption, "values">>
    }
  >
}
