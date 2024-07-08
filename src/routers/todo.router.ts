import { Router } from "express";
import { todoController } from "../controllers/todo.controller";
const router = Router();

router
    .post("/", todoController.create)
    .get("/", todoController.read)
    .put("/:id", todoController.update)
    .delete("/:id", todoController.deleting)

export default router;