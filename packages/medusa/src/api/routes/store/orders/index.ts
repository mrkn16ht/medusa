import { Router } from "express"
import "reflect-metadata"
import { Order } from "../../../.."
import middlewares, {
  transformBody,
  transformQuery,
} from "../../../middlewares"
import requireCustomerAuthentication from "../../../middlewares/require-customer-authentication"
import { StorePostCustomersCustomerOrderClaimReq } from "./request-order"
import { StorePostCustomersCustomerAcceptClaimReq } from "./confirm-order-request"
import { StoreGetOrderParams } from "./get-order"
import { StoreGetOrdersParams } from "./lookup-order"

const route = Router()

export default (app) => {
  app.use("/orders", route)

  /**
   * Lookup
   */
  route.get(
    "/",
    transformQuery(StoreGetOrdersParams, {
      defaultFields: defaultStoreOrdersFields,
      defaultRelations: defaultStoreOrdersRelations,
      allowedFields: allowedStoreOrdersFields,
      allowedRelations: allowedStoreOrdersRelations,
      isList: true,
    }),
    middlewares.wrap(require("./lookup-order").default)
  )

  /**
   * Retrieve Order
   */
  route.get(
    "/:id",
    transformQuery(StoreGetOrderParams, {
      defaultFields: defaultStoreOrdersFields,
      defaultRelations: defaultStoreOrdersRelations,
      allowedFields: allowedStoreOrdersFields,
      allowedRelations: allowedStoreOrdersRelations,
    }),
    middlewares.wrap(require("./get-order").default)
  )

  /**
   * Retrieve by Cart Id
   */
  route.get(
    "/cart/:cart_id",
    middlewares.wrap(require("./get-order-by-cart").default)
  )

  route.post(
    "/customer/confirm",
    transformBody(StorePostCustomersCustomerAcceptClaimReq),
    middlewares.wrap(require("./confirm-order-request").default)
  )

  route.post(
    "/batch/customer/token",
    requireCustomerAuthentication(),
    transformBody(StorePostCustomersCustomerOrderClaimReq),
    middlewares.wrap(require("./request-order").default)
  )

  return app
}

export const defaultStoreOrdersRelations = [
  "shipping_address",
  "fulfillments",
  "fulfillments.tracking_links",
  "items",
  "items.variant",
  "shipping_methods",
  "discounts",
  "discounts.rule",
  "customer",
  "payments",
  "region",
]

export const allowedStoreOrdersRelations = [
  ...defaultStoreOrdersRelations,
  "billing_address",
]

export const defaultStoreOrdersFields = [
  "id",
  "status",
  "fulfillment_status",
  "payment_status",
  "display_id",
  "cart_id",
  "customer_id",
  "email",
  "region_id",
  "currency_code",
  "tax_rate",
  "created_at",
  "shipping_total",
  "discount_total",
  "tax_total",
  "items.refundable",
  "refunded_total",
  "gift_card_total",
  "subtotal",
  "total",
] as (keyof Order)[]

export const allowedStoreOrdersFields = [
  ...defaultStoreOrdersFields,
  "object",
  "shipping_total",
  "discount_total",
  "tax_total",
  "refunded_total",
  "total",
  "subtotal",
  "paid_total",
  "refundable_amount",
  "gift_card_total",
  "gift_card_tax_total",
]
/**
 * Totals relation:
 *  - items.variant.product
 *  - items.tax_lines
 *  - shipping_methods.tax_lines
 *  - region.tax_rates
 * Eager loaded:
 *  - fulfillments.items
 *  - region.payment_providers
 *  - region.fulfillment_providers
 *  - shipping_methods.shipping_option
 */
/**
 * @schema StoreOrdersRes
 * type: object
 * required:
 *   - order
 * x-expanded-relations:
 *   field: order
 *   relations:
 *     - customer
 *     - discounts
 *     - discounts.rule
 *     - fulfillments
 *     - fulfillments.tracking_links
 *     - items
 *     - items.variant
 *     - payments
 *     - region
 *     - shipping_address
 *     - shipping_methods
 *     - items.variant.product
 *     - items.tax_lines
 *     - shipping_methods.tax_lines
 *     - region.tax_rates
 *     - fulfillments.items
 *     - region.payment_providers
 *     - region.fulfillment_providers
 *     - shipping_methods.shipping_option
 *   totals:
 *     - discount_total
 *     - gift_card_tax_total
 *     - gift_card_total
 *     - paid_total
 *     - refundable_amount
 *     - refunded_total
 *     - shipping_total
 *     - subtotal
 *     - tax_total
 *     - total
 *     - items.discount_total
 *     - items.gift_card_total
 *     - items.original_tax_total
 *     - items.original_total
 *     - items.refundable
 *     - items.subtotal
 *     - items.tax_total
 *     - items.total
 * properties:
 *   order:
 *     $ref: "#/components/schemas/Order"
 */
export type StoreOrdersRes = {
  order: Order
}

export * from "./lookup-order"
export * from "./confirm-order-request"
export * from "./request-order"
