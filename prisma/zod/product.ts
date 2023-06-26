import * as z from "zod"
import * as imports from "../null"
import { CompleteStatus, RelatedStatusModel } from "./index"

export const ProductModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  description: z.string().max(255, { message: "O campo descricao não poder ter tamanho maior que 255" }),
  codbar: z.string().max(255, { message: "O campo código de barra não poder ter tamanho maior que 255" }),
  status_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteProduct extends z.infer<typeof ProductModel> {
  status: CompleteStatus
}

/**
 * RelatedProductModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductModel: z.ZodSchema<CompleteProduct> = z.lazy(() => ProductModel.extend({
  status: RelatedStatusModel,
}))
