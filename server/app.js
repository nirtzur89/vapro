require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/server", {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//passport
app.use(passport.initialize());

//passport config
require("./config/passport", passport);

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

//CORS SETTINGS TO ALLOW CROSS-ORIGIN INTERACTION
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"] // <== this will be the URL of our React app (it will be running on port 3000)
  })
);

//ROUTES
const index = require("./routes/index");
app.use("/", index);

const artists = require("./routes/apis/Artist-routes");
app.use("/", artists);

const projects = require("./routes/apis/Project-routes");
app.use("/", projects);

// const projects = require("./routes/apis/project");
// app.use("/", projects);

// const userAuth = require("./routes/apis/userauth");
// app.use("/", userAuth);

// const user = require("./routes/apis/user");
// app.use("/", user);

// const allArtists = require("./routes/apis/user");
// app.use("/", allArtists);

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});
module.exports = app;
