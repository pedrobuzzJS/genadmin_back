import * as z from "zod"
import * as imports from "../null"

export const PageTypeModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  description: z.string().max(500, { message: "O campo descrição não poder ter tamanho maior que 500" }),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})
