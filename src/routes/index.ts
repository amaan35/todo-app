import { Router } from "express";
import {
  addTodo,
  updateTodo,
  deleteTodo,
  getTodos,
} from "../controllers/todos";
const router: Router = Router();

router.get("/todos", getTodos);
router.post("/addTodo", addTodo);
router.put("/updateTodo/:id", updateTodo);
router.delete("deleteTodo/:id", deleteTodo);

export default router;
