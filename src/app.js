const fs = require("fs");
const express = require("express");
require("dotenv").config;
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("../src/db/db");

const User = require("../src/modules/user/user.model");

const bodyParser = require("body-parser");

///router

const errorController = require("./middleware/errorController");
const userRouter = require("./modules/user/user.routes");
const genralDetails = require("./modules/general/general.routes");
const labRouter = require("./modules/labs/labs.routes");
const departmentRouter = require("./modules/departments/department.routes");
const signin = require("./modules/signin/signin.routes");
const item = require("./modules/items/item.routes");
const category = require("./modules/category/category.routes");
const purchase = require("./modules/purchase/purchase.routes");
const issue = require("./modules/issue/issue.routes");
const returnItem = require("./modules/return/return.routes");
const reports = require("./modules/reports/reports.routes");

const app = express();

//setting up the port for server dynamically
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
//setting up the statc assets directory like images stylesheets scripts etc
const pubDirPath = path.join(__dirname, "/public");
app.use(express.static(pubDirPath));
app.use(express.json());
app.use(cookieParser());
///setting up the view engine for advanced templating
//app.set('view engine','hbs')
// view engine setup
app.set("views", "./views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

///includeing the dynamic pages for application
app.use(signin);
app.get("/", async (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.use(userRouter);
app.use(labRouter);
app.use(departmentRouter);
app.use(item);
app.use(category);
app.use(purchase);
app.use(issue);
app.use(returnItem);
app.use(genralDetails);
app.use(reports);

app.use(errorController);
app.listen(PORT, () => {
  console.log("Application is running at port: " + PORT);
});
