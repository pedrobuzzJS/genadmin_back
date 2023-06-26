import * as z from "zod"
import * as imports from "../null"
import { CompleteCountry, RelatedCountryModel, CompleteState, RelatedStateModel } from "./index"

export const CityModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  country_id: z.number().int(),
  state_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteCity extends z.infer<typeof CityModel> {
  country: CompleteCountry
  state: CompleteState
}

/**
 * RelatedCityModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCityModel: z.ZodSchema<CompleteCity> = z.lazy(() => CityModel.extend({
  country: RelatedCountryModel,
  state: RelatedStateModel,
}))
