/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

import type { OAuth } from "./OAuth"

export interface AdminAppsListRes {
  apps: Array<OAuth>
}
