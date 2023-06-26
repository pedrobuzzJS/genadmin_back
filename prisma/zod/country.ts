import * as z from "zod"
import * as imports from "../null"
import { CompleteState, RelatedStateModel, CompleteCity, RelatedCityModel } from "./index"

export const CountryModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  acronym: z.string().max(2, { message: "O campo sigla não poder ter tamanho maior que 2" }),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteCountry extends z.infer<typeof CountryModel> {
  states: CompleteState[]
  cities: CompleteCity[]
}

/**
 * RelatedCountryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCountryModel: z.ZodSchema<CompleteCountry> = z.lazy(() => CountryModel.extend({
  states: RelatedStateModel.array(),
  cities: RelatedCityModel.array(),
}))
