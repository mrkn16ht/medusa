/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

export interface AdminDeleteProductsFromCollectionReq {
  /**
   * An array of Product IDs to remove from the Product Collection.
   */
  product_ids: Array<string>
}
