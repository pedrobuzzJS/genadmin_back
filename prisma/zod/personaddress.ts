import * as z from "zod"
import * as imports from "../null"
import { CompletePerson, RelatedPersonModel, CompleteStatus, RelatedStatusModel } from "./index"

export const PersonAddressModel = z.object({
  id: z.number().int(),
  person_id: z.number().int(),
  cep: z.string().max(8, { message: "O campo CPF não poder ter tamanho maior que 8" }),
  fiscal: z.boolean(),
  country_id: z.number().int(),
  state_id: z.number().int(),
  city_id: z.number().int(),
  district: z.number().int(),
  number: z.number().int(),
  status_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompletePersonAddress extends z.infer<typeof PersonAddressModel> {
  person: CompletePerson
  status: CompleteStatus
}

/**
 * RelatedPersonAddressModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPersonAddressModel: z.ZodSchema<CompletePersonAddress> = z.lazy(() => PersonAddressModel.extend({
  person: RelatedPersonModel,
  status: RelatedStatusModel,
}))
