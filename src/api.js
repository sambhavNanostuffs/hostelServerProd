// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");
// const mongoose = require("mongoose");
// const session = require("express-session");
// const FileStore = require("session-file-store")(session);
// var passport = require("passport");
// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// var studentRouter = require("./routes/studentRouter");
// var employeeRouter = require("./routes/employeeRouter");
// var noticeRouter = require("./routes/noticeRouter");
// var architectureRouter = require("./routes/architectureRouter");
// var mealsRouter = require("./routes/mealsRouter");
// var seatsRouter = require("./routes/seatsRouter");
// var salaryRouter = require("./routes/salaryRouter");
// var hostelRouter = require("./routes/hostelsRouter");
// var uploadRouter = require("./routes/uploadRouter");
// var config = require("./config");
// const complaintRouter = require("./routes/ComplaintRouter");
// const mealsBillRouter = require("./routes/mealsBillRouter");
// const url = config.mongoUrl;
// const connect = mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// connect.then(
//   (db) => {
//     console.log("Connected correctly to server");
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// var app = express();

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// /*app.use(session({
//   name: 'session-id',
//   secret: '12345-67890-09876-54321',
//   saveUninitialized: false,
//   resave: false,
//   store: new FileStore()
// }));*/

// app.use(passport.initialize());

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/hostels", hostelRouter);
// //app.use(cookieParser());
// /*function auth (req, res, next) {
//   console.log(req.session);

//   if(!req.session.user) {
//       var err = new Error('You are not authenticated!');
//       err.status = 403;
//       return next(err);
//   }
//   else {
//     if (req.session.user === 'authenticated') {
//       next();
//     }
//     else {
//       var err = new Error('You are not authenticated!');
//       err.status = 403;
//       return next(err);
//     }
//   }
// }
// app.use(auth);*/
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/students", studentRouter);
// app.use("/employees", employeeRouter);
// app.use("/notices", noticeRouter);
// app.use("/architecture", architectureRouter);
// app.use("/meals", mealsRouter);
// app.use("/seats", seatsRouter);
// app.use("/salary", salaryRouter);
// app.use("/hostels", hostelRouter);
// app.use("/imageUpload", uploadRouter);
// app.use("/mealBills", mealsBillRouter);
// app.use("/complaints", complaintRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, console.log(`Server running on port ${PORT}`));

// module.exports = app;

var createError = require("http-errors");
var express = require("express");
var jade = require("jade");
var path = require("path");
const serverless = require("serverless-http");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
var passport = require("passport");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var studentRouter = require("./routes/studentRouter");
var employeeRouter = require("./routes/employeeRouter");
var noticeRouter = require("./routes/noticeRouter");
var architectureRouter = require("./routes/architectureRouter");
var mealsRouter = require("./routes/mealsRouter");
var seatsRouter = require("./routes/seatsRouter");
var salaryRouter = require("./routes/salaryRouter");
var hostelRouter = require("./routes/hostelsRouter");
var uploadRouter = require("./routes/uploadRouter");
var config = require("./config");
const complaintRouter = require("./routes/ComplaintRouter");
const mealsBillRouter = require("./routes/mealsBillRouter");
const router = express.Router();
const url = config.mongoUrl;
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connect.then(
  (db) => {
    console.log("Connected correctly to server");
  },
  (err) => {
    console.log(err);
  }
);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/*app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
  saveUninitialized: false,
  resave: false,
  store: new FileStore()
}));*/

app.use(passport.initialize());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/hostels", hostelRouter);
//app.use(cookieParser());
/*function auth (req, res, next) {
  console.log(req.session);

  if(!req.session.user) {
      var err = new Error('You are not authenticated!');
      err.status = 403;
      return next(err);
  }
  else {
    if (req.session.user === 'authenticated') {
      next();
    }
    else {
      var err = new Error('You are not authenticated!');
      err.status = 403;
      return next(err);
    }
  }
}
app.use(auth);*/
app.use(express.static(path.join(__dirname, "public")));

app.use("/students", studentRouter);
app.use("/employees", employeeRouter);
app.use("/notices", noticeRouter);
app.use("/architecture", architectureRouter);
app.use("/meals", mealsRouter);
app.use("/seats", seatsRouter);
app.use("/salary", salaryRouter);
app.use("/hostels", hostelRouter);
app.use("/imageUpload", uploadRouter);
app.use("/mealBills", mealsBillRouter);
app.use("/complaints", complaintRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// module.exports = app;

app.use(`/.netlify/functions/api`, router);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);
