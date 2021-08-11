const fs = require("fs");
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("../src/db/db");

const bodyParser = require("body-parser");
///router
const userRouter = require("./modules/user/user.routes");
const labRouter = require("./modules/labs/labs.routes");
const departmentRouter = require("./modules/departments/department.routes");
const signin = require("./modules/signin/signin.routes");
const item = require("./modules/items/item.routes");

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
console.log(__dirname);
app.set("views", "./views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

///includeing the dynamic pages for application
//

app.get("/", async (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.use(userRouter);
app.use(labRouter);
app.use(departmentRouter);
app.use(signin);
app.use(item);

app.listen(PORT, () => {
  console.log("Application is running at port: " + PORT);
});
