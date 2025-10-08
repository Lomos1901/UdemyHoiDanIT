const express = require("express");
import 'dotenv/config';
import webRoutes from "./routes/web";



const app = express();
const PORT = process.env.PORT || 3000;


// config view engine
app.set("view engine", "ejs");
app.set("views", "./src/view");

//config req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//config routes
webRoutes(app);

//config static files
app.use(express.static("public"));


app.listen(PORT, () => {
  console.log(`Server is running on 1 http://localhost:${PORT}`);
  console.log("env port: " + process.env.PORT);
});
