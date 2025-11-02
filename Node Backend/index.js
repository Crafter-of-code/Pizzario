import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello word");
});
app.listen(port, () => {
  console.log(`App is listing on port ${port}`);
});
