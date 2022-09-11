const router = require("express").Router();
const {
	getAllTodosController,
	addTodoPostController,
	deleteTodoController,
	updateTodoPatchController,
	getSingleTodoController,
} = require("../controllers/todos.controller");

router.get("/", getAllTodosController);
router.get("/find", getSingleTodoController);

router.post("/", addTodoPostController);

router.delete("/:id", deleteTodoController);

router.patch("/:id", updateTodoPatchController);

module.exports = router;
