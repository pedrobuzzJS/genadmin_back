export default class Service {
  protected model: any;
  protected permissionList: string;
  protected permissionSave: string;
  protected permissionCreate: string;
  protected permissionUpdate: string;
  protected permissionDelete: string;

  constructor(
    model: any,
    permissionList: string,
    permissionSave: string,
    permissionCreate: string,
    permissionUpdate: string,
    permissionDelete: string
  ) {
    this.model = model;
    this.permissionList = permissionList;
    this.permissionSave = permissionSave;
    this.permissionCreate = permissionCreate;
    this.permissionUpdate = permissionUpdate;
    this.permissionDelete = permissionDelete;
  }
}