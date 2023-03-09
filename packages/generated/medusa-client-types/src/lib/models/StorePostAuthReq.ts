/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

export interface StorePostAuthReq {
  /**
   * The Customer's email.
   */
  email: string
  /**
   * The Customer's password.
   */
  password: string
}
