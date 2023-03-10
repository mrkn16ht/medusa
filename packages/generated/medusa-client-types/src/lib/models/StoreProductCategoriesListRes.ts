/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

import type { ProductCategory } from "./ProductCategory"

export interface StoreProductCategoriesListRes {
  product_categories: Array<
    SetRequired<ProductCategory, "parent_category" | "category_children">
  >

  /**
   * The total number of items available
   */
  count: number
  /**
   * The number of items skipped before these items
   */
  offset: number
  /**
   * The number of items per page
   */
  limit: number
}
