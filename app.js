"use strict";

// 引入框架、套件
const express = require("express");
const app = express();
const exhbs = require("express-handlebars");

// 設定把樣版引擎交給 exhbs
app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// 定義變數
const port = 3000;

// 設定路由
app.get("/", (req, res) => {
  res.end(`hey`);
});

// 監聽
app.listen(port, () => {
  console.log(`listening...`);
});
