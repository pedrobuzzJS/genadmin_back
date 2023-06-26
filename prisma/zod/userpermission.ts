import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompletePermission, RelatedPermissionModel } from "./index"

export const UserPermissionModel = z.object({
  user_id: z.string(),
  permission_id: z.number().int(),
})

export interface CompleteUserPermission extends z.infer<typeof UserPermissionModel> {
  user: CompleteUser
  permission: CompletePermission
}

/**
 * RelatedUserPermissionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserPermissionModel: z.ZodSchema<CompleteUserPermission> = z.lazy(() => UserPermissionModel.extend({
  user: RelatedUserModel,
  permission: RelatedPermissionModel,
}))
