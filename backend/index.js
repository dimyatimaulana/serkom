import express from "express";
import cors from "cors";
import pendaftarRoute from "./routes/pendaftarRoute.js"

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(pendaftarRoute);

app.listen(5000, () => {
  console.log("Server is running");
});
