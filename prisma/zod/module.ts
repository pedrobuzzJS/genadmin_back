import * as z from "zod"
import * as imports from "../null"

export const ModuleModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})
