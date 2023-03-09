/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRequired, Merge } from "../core/ModelUtils"

import type { Discount } from "./Discount"
import type { Fulfillment } from "./Fulfillment"
import type { LineItem } from "./LineItem"
import type { Order } from "./Order"
import type { ProductVariant } from "./ProductVariant"
import type { Region } from "./Region"
import type { ShippingMethod } from "./ShippingMethod"

export interface StoreOrdersRes {
  order: Merge<
    SetRequired<
      Order,
      | "customer"
      | "discounts"
      | "fulfillments"
      | "items"
      | "payments"
      | "region"
      | "shipping_address"
      | "shipping_methods"
      | "discount_total"
      | "gift_card_tax_total"
      | "gift_card_total"
      | "paid_total"
      | "refundable_amount"
      | "refunded_total"
      | "shipping_total"
      | "subtotal"
      | "tax_total"
      | "total"
    >,
    {
      discounts: Array<SetRequired<Discount, "rule">>
      fulfillments: Array<SetRequired<Fulfillment, "tracking_links" | "items">>
      items: Array<
        Merge<
          SetRequired<
            LineItem,
            | "variant"
            | "tax_lines"
            | "discount_total"
            | "gift_card_total"
            | "original_tax_total"
            | "original_total"
            | "refundable"
            | "subtotal"
            | "tax_total"
            | "total"
          >,
          {
            variant: SetRequired<ProductVariant, "product">
          }
        >
      >
      region: SetRequired<
        Region,
        "tax_rates" | "payment_providers" | "fulfillment_providers"
      >
      shipping_methods: Array<
        SetRequired<ShippingMethod, "tax_lines" | "shipping_option">
      >
    }
  >
}
