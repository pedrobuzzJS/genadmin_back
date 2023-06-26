import * as z from "zod"
import * as imports from "../null"
import { CompleteStatus, RelatedStatusModel, CompleteUserPermission, RelatedUserPermissionModel, CompleteUserRole, RelatedUserRoleModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  name: z.string().max(255, { message: "O campo nome não poder ter tamanho maior que 255" }),
  username: z.string().max(255, { message: "O campo usuário não poder ter tamanho maior que 255" }),
  email: z.string().max(500, { message: "O campo email não poder ter tamanho maior que 500" }),
  email_verified: z.boolean(),
  password: z.string().max(255, { message: "O campo senha não poder ter tamanho maior que 255" }),
  remember_token: z.string().max(1000, { message: "O campo nome não poder ter tamanho maior que 1000" }).nullish(),
  status_id: z.number().int(),
  admin: z.boolean().nullish(),
  approval: z.number().int().nullish(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  status: CompleteStatus
  user_permission: CompleteUserPermission[]
  user_role: CompleteUserRole[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  status: RelatedStatusModel,
  user_permission: RelatedUserPermissionModel.array(),
  user_role: RelatedUserRoleModel.array(),
}))
