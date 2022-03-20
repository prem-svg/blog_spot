const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routers/userrouter");
const blogRouter = require("./routers/blogrouter");
const commentRouter = require("./routers/commentsrouter");

const morgan = require("morgan");

const cors = require("cors");
//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
//register router
app.use("/user", userRouter);
//blog
app.use("/blog", blogRouter);
//comment
app.use("/comment", commentRouter);
//home router
app.use("/", (req, res) => {
  res.send("backend running");
});
//server create
app.listen(5000, () => {
  console.log("server start on 5000");
});
//db connected
mongoose.connect("mongodb+srv://prem:S6xj1hE733UzGlZH@cluster0.c1hmm.mongodb.net/blogSpot",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("DB connected successfully");
    }
  }
);