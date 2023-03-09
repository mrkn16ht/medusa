/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

export interface AdminPostProductsToCollectionReq {
  /**
   * An array of Product IDs to add to the Product Collection.
   */
  product_ids: Array<string>
}
