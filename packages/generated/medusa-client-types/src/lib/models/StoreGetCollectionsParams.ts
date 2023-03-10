/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

export interface StoreGetCollectionsParams {
  /**
   * The number of collections to skip before starting to collect the collections set
   */
  offset?: number
  /**
   * The number of collections to return
   */
  limit?: number
  /**
   * Date comparison for when resulting collections were created.
   */
  created_at?: {
    /**
     * filter by dates less than this date
     */
    lt?: string
    /**
     * filter by dates greater than this date
     */
    gt?: string
    /**
     * filter by dates less than or equal to this date
     */
    lte?: string
    /**
     * filter by dates greater than or equal to this date
     */
    gte?: string
  }
  /**
   * Date comparison for when resulting collections were updated.
   */
  updated_at?: {
    /**
     * filter by dates less than this date
     */
    lt?: string
    /**
     * filter by dates greater than this date
     */
    gt?: string
    /**
     * filter by dates less than or equal to this date
     */
    lte?: string
    /**
     * filter by dates greater than or equal to this date
     */
    gte?: string
  }
}
