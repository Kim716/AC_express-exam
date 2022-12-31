"use strict";

// 引入框架、套件
const express = require("express");
const app = express();
const exhbs = require("express-handlebars");

// 設定把樣版引擎交給 exhbs
app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// 設定靜態檔案
app.use(express.static("public"));

// 定義變數
const port = 3000;

// 設定路由
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:anchor", (req, res) => {
  const pageNameLower = req.params.anchor;
  /// 為了避免網址出現大寫，所以 a href 都為小寫，取網址的字串下來把第一個改為大寫
  const pageName =
    pageNameLower[0].toUpperCase() +
    pageNameLower.slice(1, pageNameLower.length);

  res.render("detail", { pageName });
});

// 監聽
app.listen(port, () => {
  console.log(`listening...`);
});
