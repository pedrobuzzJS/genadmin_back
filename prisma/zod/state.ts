import * as z from "zod"
import * as imports from "../null"
import { CompleteCountry, RelatedCountryModel, CompleteCity, RelatedCityModel } from "./index"

export const StateModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  country_id: z.number().int(),
  acronym: z.string().max(2, { message: "O campo sigla não poder ter tamanho maior que 2" }),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteState extends z.infer<typeof StateModel> {
  country: CompleteCountry
  cities: CompleteCity[]
}

/**
 * RelatedStateModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedStateModel: z.ZodSchema<CompleteState> = z.lazy(() => StateModel.extend({
  country: RelatedCountryModel,
  cities: RelatedCityModel.array(),
}))
