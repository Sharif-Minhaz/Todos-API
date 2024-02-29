const Todo = require("../models/Todos.model");

exports.getAllTodosController = async (req, res, next) => {
	try {
		const todos = await Todo.find();
		res.status(200).json(todos);
	} catch (err) {
		next(err);
	}
};

exports.getSearchTodosController = async (req, res, next) => {
	const { title } = req.query;
	try {
		const todo = await Todo.find({ $text: { $search: title } });
		res.status(200).json(todo);
	} catch (err) {
		next(err);
	}
};

exports.getSingleTodoController = async (req, res, next) => {
	const { id } = req.params;
	try {
		const todo = await Todo.findById(id);
		res.status(200).json(todo);
	} catch (err) {
		next(err);
	}
};

exports.addTodoPostController = async (req, res, next) => {
	try {
		const newTodo = new Todo(req.body);
		const addedTodo = await newTodo.save();
		res.status(201).json(addedTodo);
	} catch (err) {
		next(err);
	}
};

exports.updateTodoPatchController = async (req, res, next) => {
	const { id } = req.params;
	try {
		const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
		res.status(200).json(updatedTodo);
	} catch (err) {
		next(err);
	}
};

exports.deleteTodoController = async (req, res, next) => {
	const { id } = req.params;
	try {
		const deletedTodo = await Todo.findByIdAndDelete(id);
		res.status(200).json(deletedTodo);
	} catch (err) {
		next(err);
	}
};
