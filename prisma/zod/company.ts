import * as z from "zod"
import * as imports from "../null"
import { CompleteStatus, RelatedStatusModel, CompleteCompanyBranch, RelatedCompanyBranchModel, CompleteConfig, RelatedConfigModel, CompleteModule, RelatedModuleModel } from "./index"

export const CompanyModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  status_id: z.number().int(),
  approval: z.number().int().nullish(),
  plan: z.string(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteCompany extends z.infer<typeof CompanyModel> {
  status: CompleteStatus
  companyBranches: CompleteCompanyBranch[]
  config: CompleteConfig[]
  module: CompleteModule[]
}

/**
 * RelatedCompanyModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCompanyModel: z.ZodSchema<CompleteCompany> = z.lazy(() => CompanyModel.extend({
  status: RelatedStatusModel,
  companyBranches: RelatedCompanyBranchModel.array(),
  config: RelatedConfigModel.array(),
  module: RelatedModuleModel.array(),
}))
