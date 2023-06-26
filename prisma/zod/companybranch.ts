import * as z from "zod"
import * as imports from "../null"
import { CompleteCompany, RelatedCompanyModel, CompleteStatus, RelatedStatusModel } from "./index"

export const CompanyBranchModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  approval: z.number().int().nullish(),
  company_id: z.number().int(),
  status_id: z.number().int(),
  master: z.boolean(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteCompanyBranch extends z.infer<typeof CompanyBranchModel> {
  company: CompleteCompany
  status: CompleteStatus
}

/**
 * RelatedCompanyBranchModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCompanyBranchModel: z.ZodSchema<CompleteCompanyBranch> = z.lazy(() => CompanyBranchModel.extend({
  company: RelatedCompanyModel,
  status: RelatedStatusModel,
}))
