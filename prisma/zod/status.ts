import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompleteMenu, RelatedMenuModel, CompletePage, RelatedPageModel, CompleteExpenseType, RelatedExpenseTypeModel, CompleteProduct, RelatedProductModel, CompleteCompany, RelatedCompanyModel, CompleteCompanyBranch, RelatedCompanyBranchModel, CompletePerson, RelatedPersonModel, CompletePersonContact, RelatedPersonContactModel, CompletePersonAddress, RelatedPersonAddressModel } from "./index"

export const StatusModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  description: z.string().max(255, { message: "O campo descrição não poder ter tamanho maior que 255" }),
  color: z.string().max(50, { message: "O campo cor não poder ter tamanho maior que 50" }).nullish(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteStatus extends z.infer<typeof StatusModel> {
  user: CompleteUser[]
  Menu: CompleteMenu[]
  Page: CompletePage[]
  ExpensiveType: CompleteExpenseType[]
  Product: CompleteProduct[]
  Company: CompleteCompany[]
  CompanyBranch: CompleteCompanyBranch[]
  Person: CompletePerson[]
  PersonContact: CompletePersonContact[]
  PersonAddress: CompletePersonAddress[]
}

/**
 * RelatedStatusModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedStatusModel: z.ZodSchema<CompleteStatus> = z.lazy(() => StatusModel.extend({
  user: RelatedUserModel.array(),
  Menu: RelatedMenuModel.array(),
  Page: RelatedPageModel.array(),
  ExpensiveType: RelatedExpenseTypeModel.array(),
  Product: RelatedProductModel.array(),
  Company: RelatedCompanyModel.array(),
  CompanyBranch: RelatedCompanyBranchModel.array(),
  Person: RelatedPersonModel.array(),
  PersonContact: RelatedPersonContactModel.array(),
  PersonAddress: RelatedPersonAddressModel.array(),
}))
