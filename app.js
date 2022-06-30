// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();


require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "project2";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

const authRouter = require('./routes/auth.routes');
app.use('/', authRouter);

const snackRouter = require('./routes/snacks.routes');
app.use('/snacks',snackRouter)

const routineRouter = require('./routes/routine.routes');
app.use('/routines',routineRouter)

const exerciseRouter= require("./routes/exercise.routes")
app.use("/exercise",exerciseRouter)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
