import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.json("Woah! You got it!");
});

app.get("/login", function (request, response) {
  repsonse.json("the login was called");
});

//endpoint post server
app.post("/info", function (request, response) {
  // retrieve the information from the form
  console.log(request.body);
  // here we would add our new joke to the database
  response.json("Thank you for making a new entry");
});

// endpoint get to server
app.get("/guestbooks", async function (request, response) {
  // get the messages from the database
  const result = await db.query(`SELECT * FROM guestbooks`);
  const guestbooks = result.rows;
  response.json(guestbooks);
});

// getting server to run
app.listen(5332, function () {
  console.log("Server is running on port 5332");
});
