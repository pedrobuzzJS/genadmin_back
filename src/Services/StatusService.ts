import { Status } from "../Models/Status";

export class StatusService {
  public async list() {
    let status = new Status()
    return await status.get()
  }

  public async show(params: number) {
    const [ id ] = Object.values(params)
    return await new Status().id(id)
  }
}