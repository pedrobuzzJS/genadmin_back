import Service from "../Abstracts/Service";
import { ExpenseType } from "@prisma/client";

export class ExpenseTypeService extends Service {
  protected model: any;
  protected $permissionList = 'ADMIN_USER';
  protected $permissionCreate = 'ADMIN_USER_USER_CREATE';
  protected $permissionUpdate = 'ADMIN_USER_USER_UPDATE';
  protected $permissionDelete = 'ADMIN_USER_USER_DELETE';
};