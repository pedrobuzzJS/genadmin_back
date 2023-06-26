import * as z from "zod"
import * as imports from "../null"
import { CompletePerson, RelatedPersonModel, CompleteStatus, RelatedStatusModel } from "./index"

export const PersonContactModel = z.object({
  id: z.number().int(),
  master: z.boolean(),
  person_id: z.number().int(),
  email: z.string().max(500, { message: "O campo email não poder ter tamanho maior que 500" }),
  phone: z.string(),
  status_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompletePersonContact extends z.infer<typeof PersonContactModel> {
  person: CompletePerson
  status: CompleteStatus
}

/**
 * RelatedPersonContactModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPersonContactModel: z.ZodSchema<CompletePersonContact> = z.lazy(() => PersonContactModel.extend({
  person: RelatedPersonModel,
  status: RelatedStatusModel,
}))
