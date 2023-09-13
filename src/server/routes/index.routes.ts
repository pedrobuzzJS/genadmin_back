import { Router } from "express";
import { schemaValition } from "../../middleware/validateSchemaZod";
import MenuController from "../../controllers/MenuController";
import TipoDespesaController from "../../controllers/TipoDespesaController";
import UsuarioController from "../../controllers/UsuarioController";
import StatusController from "../../controllers/StatusController";
import ModulesController from "../../controllers/ModulesController";

const Routes = Router();

Routes.get("/usuario", UsuarioController.list);

Routes.get("/menu", (req, res) => { new MenuController().list(req, res) })
Routes.get("/menu/:id", (req, res) => { new MenuController().show(req, res) })

Routes.get("/tipo-despesa", TipoDespesaController.list)
Routes.post("/tipo-despesa", TipoDespesaController.create)
Routes.put("/tipo-despesa", TipoDespesaController.update)
Routes.delete("/tipo-despesa", TipoDespesaController.delete)

Routes.get("/status", (req, res) => { new StatusController().list(req, res) })
Routes.get("/status/:id", (req, res) => { new StatusController().show(req, res) })
// Routes.get("/status/:id", StatusController.find)

Routes.get("/modules", ModulesController.list)

export default Routes;