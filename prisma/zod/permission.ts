import * as z from "zod"
import * as imports from "../null"
import { CompleteRolePermission, RelatedRolePermissionModel, CompleteUserPermission, RelatedUserPermissionModel } from "./index"

export const PermissionModel = z.object({
  id: z.number().int(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  description: z.string().max(500, { message: "O campo descrição não poder ter tamanho maior que 500" }),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompletePermission extends z.infer<typeof PermissionModel> {
  role_permission: CompleteRolePermission[]
  user_permission: CompleteUserPermission[]
}

/**
 * RelatedPermissionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPermissionModel: z.ZodSchema<CompletePermission> = z.lazy(() => PermissionModel.extend({
  role_permission: RelatedRolePermissionModel.array(),
  user_permission: RelatedUserPermissionModel.array(),
}))
