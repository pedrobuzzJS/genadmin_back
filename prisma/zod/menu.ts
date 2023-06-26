import * as z from "zod"
import * as imports from "../null"
import { CompleteStatus, RelatedStatusModel } from "./index"

export const MenuModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  parameters: z.string().max(1000, { message: "O campo campo parametro não poder ter tamanho maior que 1000" }).nullish(),
  route: z.string().max(1000, { message: "O campo campo rota não poder ter tamanho maior que 1000" }).nullish(),
  icon: z.string().max(50, { message: "O campo icone não poder ter tamanho maior que 50" }),
  parent_id: z.number().int().nullish(),
  component: z.string().max(255, { message: "O campo component não poder ter tamanho maior que 255" }).nullish(),
  has_childrens: z.boolean(),
  order: z.number().int().nullish(),
  disabled: z.boolean(),
  status_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteMenu extends z.infer<typeof MenuModel> {
  status: CompleteStatus
}

/**
 * RelatedMenuModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMenuModel: z.ZodSchema<CompleteMenu> = z.lazy(() => MenuModel.extend({
  status: RelatedStatusModel,
}))
