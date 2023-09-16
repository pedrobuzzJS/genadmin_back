import DefaultService from "../Abstracts/Service"
import { ExpensesTypes } from "../Models/ExpensesTypes"

export class ExpensesTypesService extends DefaultService {
  public constructor() {
    super()
  }
  public async list() {
    let menu = new ExpensesTypes()
    return await menu.get()
  }

  public async show(params: number) {
    const [ id ] = Object.values(params)
    return await new ExpensesTypes().id(id)
  }
}