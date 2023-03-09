/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

import type { Notification } from "./Notification"

export interface AdminNotificationsListRes {
  notifications: Array<Notification>
}
