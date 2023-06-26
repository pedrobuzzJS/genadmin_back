import * as z from "zod"
import * as imports from "../null"
import { CompleteStatus, RelatedStatusModel } from "./index"

export const ExpenseTypeModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  description: z.string().max(500, { message: "O campo descrição não poder ter tamanho maior que 500" }),
  status_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteExpenseType extends z.infer<typeof ExpenseTypeModel> {
  status: CompleteStatus
}

/**
 * RelatedExpenseTypeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedExpenseTypeModel: z.ZodSchema<CompleteExpenseType> = z.lazy(() => ExpenseTypeModel.extend({
  status: RelatedStatusModel,
}))
