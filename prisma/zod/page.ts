import * as z from "zod"
import * as imports from "../null"
import { CompleteStatus, RelatedStatusModel } from "./index"

export const PageModel = z.object({
  id: z.number().int(),
  status_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompletePage extends z.infer<typeof PageModel> {
  status: CompleteStatus
}

/**
 * RelatedPageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPageModel: z.ZodSchema<CompletePage> = z.lazy(() => PageModel.extend({
  status: RelatedStatusModel,
}))
