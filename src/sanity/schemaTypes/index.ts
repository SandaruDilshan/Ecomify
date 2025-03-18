import { type SchemaTypeDefinition } from 'sanity'
import { product } from './schemas/product'
import { productCategory } from './schemas/productCategory'
import { promotionCampain } from './schemas/promotionCampain'
import { promotionCode } from './schemas/promotionCode'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    product,
    productCategory,
    promotionCampain,
    promotionCode,
  ],
}
