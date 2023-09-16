import { Router } from "express";

import TipoDespesaController from "../../controllers/TipoDespesaController";
import UsuarioController from "../../controllers/UsuarioController";
import StatusController from "../../controllers/StatusController";
import ExpensesTypesController from "../../controllers/ExpensesTypesController";
import MenudController from "../../controllers/MenuController";
import ModulesController from "../../controllers/ModuleController";

const Routes = Router();

Routes.get("/usuario", UsuarioController.list);

Routes.get("/menu", (req, res) => { new MenudController().list(req, res) })
Routes.get("/menu/:id", (req, res) => { new MenudController().show(req, res) })

Routes.get("/expensestypes", (req, res) => { new ExpensesTypesController().list(req, res) })
Routes.get("/expensestypes/:id", (req, res) => { new ExpensesTypesController().show(req, res) })

Routes.get("/tipo-despesa", TipoDespesaController.list)
Routes.post("/tipo-despesa", TipoDespesaController.create)
Routes.put("/tipo-despesa", TipoDespesaController.update)
Routes.delete("/tipo-despesa", TipoDespesaController.delete)

Routes.get("/status", (req, res) => { new StatusController().list(req, res) })
Routes.get("/status/:id", (req, res) => { new StatusController().show(req, res) })
// Routes.get("/status/:id", StatusController.find)

Routes.get("/modules", (req, res) => { new ModulesController().list(req, res) })
Routes.get("/modules/:id", (req, res) => { new ModulesController().show(req, res) })

export default Routes;