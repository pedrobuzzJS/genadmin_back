import * as z from "zod"
import * as imports from "../null"
import { CompleteCompany, RelatedCompanyModel } from "./index"

export const ModuleModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  company_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteModule extends z.infer<typeof ModuleModel> {
  company: CompleteCompany
}

/**
 * RelatedModuleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedModuleModel: z.ZodSchema<CompleteModule> = z.lazy(() => ModuleModel.extend({
  company: RelatedCompanyModel,
}))
