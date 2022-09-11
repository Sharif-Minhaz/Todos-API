const { model, Schema } = require("mongoose");

const todoSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	isComplete: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const Todo = model("todo", todoSchema);

module.exports = Todo;
