import * as z from "zod"
import * as imports from "../null"
import { CompleteStatus, RelatedStatusModel, CompletePersonContact, RelatedPersonContactModel, CompletePersonAddress, RelatedPersonAddressModel } from "./index"

export const PersonModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  tag: z.string().max(2000, { message: "O campo tag não poder ter tamanho maior que 2000" }).nullish(),
  approval: z.number().int().nullish(),
  juricical: z.boolean(),
  cpf_cnpj: z.string().max(14, { message: "O campo cpf_cnpj não poder ter tamanho maior que 14" }).nullish(),
  status_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompletePerson extends z.infer<typeof PersonModel> {
  status: CompleteStatus
  personContact: CompletePersonContact[]
  personAddress: CompletePersonAddress[]
}

/**
 * RelatedPersonModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPersonModel: z.ZodSchema<CompletePerson> = z.lazy(() => PersonModel.extend({
  status: RelatedStatusModel,
  personContact: RelatedPersonContactModel.array(),
  personAddress: RelatedPersonAddressModel.array(),
}))
