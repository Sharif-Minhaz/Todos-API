const router = require("express").Router();
const {
	getAllTodosController,
	addTodoPostController,
	deleteTodoController,
	updateTodoPatchController,
	getSingleTodoController,
	getSearchTodosController,
} = require("../controllers/todos.controller");

router.get("/", getAllTodosController);
router.get("/search", getSearchTodosController);
router.get("/find/:id", getSingleTodoController);

router.post("/", addTodoPostController);

router.delete("/:id", deleteTodoController);

router.patch("/:id", updateTodoPatchController);

module.exports = router;
