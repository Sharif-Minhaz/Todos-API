const homeRoute = require("./home.route");
const todosRoute = require("./todos.route")

const routers = [
	{
		path: "/",
		handler: homeRoute,
	},
	{
		path: "/api/todos",
		handler: todosRoute,
	},
];

module.exports = (app) => {
	routers.forEach((route) => {
		app.use(route.path, route.handler);
	});
};
