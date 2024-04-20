import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Welcome to HTTP Request</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Rishikanth</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +91 9445231259</p>");
});
app.post("/register", (req, res) => {
    res.sendStatus(201);
  });
  
  app.put("/user/rishi", (req, res) => {
    res.sendStatus(200);
  });
  
  app.patch("/user/rishi", (req, res) => {
    res.sendStatus(200);
  });
  
  app.delete("/user/rishi", (req, res) => {
    //Deleting
    res.sendStatus(200);
  });
  

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});