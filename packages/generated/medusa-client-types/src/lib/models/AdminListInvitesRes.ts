/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

import type { Invite } from "./Invite"

export interface AdminListInvitesRes {
  invites: Array<Invite>
}
