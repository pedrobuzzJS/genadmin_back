import { Router } from "express";
import { schemaValition } from "../../middleware/validateSchemaZod";
import MenuController from "../../controllers/MenuController";
import TipoDespesaController from "../../controllers/TipoDespesaController";
import UsuarioController from "../../controllers/UsuarioController";
import StatusController from "../../controllers/StatusController";
import ModulesController from "../../controllers/ModulesController";

const Routes = Router();

Routes.get("/usuario", UsuarioController.list);

Routes.get("/menu", MenuController.list);
// Routes.delete("/menu", MenuController.delete);

Routes.get("/tipo-despesa", TipoDespesaController.list)
Routes.post("/tipo-despesa", TipoDespesaController.create)
Routes.put("/tipo-despesa", TipoDespesaController.update)
Routes.delete("/tipo-despesa", TipoDespesaController.delete)

Routes.get("/status", StatusController.list)
Routes.post("/status", StatusController.create)
Routes.put("/status", StatusController.update)
Routes.delete("/status", StatusController.delete)

Routes.get("/modules", ModulesController.list)

export default Routes;