/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

export interface AdminPostCustomerGroupsGroupReq {
  /**
   * Name of the customer group
   */
  name?: string
  /**
   * Metadata for the customer.
   */
  metadata?: Record<string, any>
}
