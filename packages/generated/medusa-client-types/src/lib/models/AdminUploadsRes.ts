/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

export interface AdminUploadsRes {
  uploads: Array<{
    /**
     * The URL of the uploaded file.
     */
    url: string
  }>
}
