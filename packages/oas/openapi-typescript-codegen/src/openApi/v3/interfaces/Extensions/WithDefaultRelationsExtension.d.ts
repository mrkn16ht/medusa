export interface WithExtendedRelationsExtension {
  "x-expanded-relations"?: {
    field: string
    relations?: string[]
    totals?: string[]
  }
}
