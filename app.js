const express = require("express");
//express app
const app = express();

//listen for requests
app.listen(3000);

// register view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //res.send("<p>home page</p>");
  //res.sendFile("./views/index.html", { root: __dirname });
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //res.send("<p>about page</p>");
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

/* //redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
}); */

//404

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  req.status(404).res.render("404");
});
