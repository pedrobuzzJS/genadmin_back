import * as z from "zod"
import * as imports from "../null"
import { CompleteCompany, RelatedCompanyModel } from "./index"

export const ConfigModel = z.object({
  id: z.number().int(),
  company_id: z.number().int(),
  param: z.string().max(100, { message: "O campo parametro não poder ter tamanho maior que 100" }),
  value: z.string().max(1000, { message: "O campo valor não poder ter tamanho maior que 1000" }).nullish(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteConfig extends z.infer<typeof ConfigModel> {
  company: CompleteCompany
}

/**
 * RelatedConfigModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedConfigModel: z.ZodSchema<CompleteConfig> = z.lazy(() => ConfigModel.extend({
  company: RelatedCompanyModel,
}))
