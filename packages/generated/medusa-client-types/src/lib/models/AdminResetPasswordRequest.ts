/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

export interface AdminResetPasswordRequest {
  /**
   * The Users email.
   */
  email?: string
  /**
   * The token generated from the 'password-token' endpoint.
   */
  token: string
  /**
   * The Users new password.
   */
  password: string
}
