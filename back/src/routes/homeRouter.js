const { Router } = require("express");
const { getHome, postHome } = require("../controllers/homeController");
const homeRouter = Router();

homeRouter.get("/", getHome);
homeRouter.post("/", postHome);

module.exports = homeRouter;
