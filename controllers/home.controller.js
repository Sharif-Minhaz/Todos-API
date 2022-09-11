exports.homeGetController = (req, res, next) => {
	res.status(200).json({ message: "Welcome to todos API" });
};
