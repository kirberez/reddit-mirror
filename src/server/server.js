import express from "express";
import ReactDOM from "react-dom/server";

import axios from "axios";
import { App } from "../App";
import { indexTemplate } from "./indexTemplate";

export const URI = process.env.URI;
export const PORT = process.env.PORT || 3000;
export const CLIENT_ID = process.env.CLIENT_ID;
export const SECRET = process.env.SECRET;

console.log("URI: ", URI);
console.log("PORT: ", PORT);
console.log("CLIENT_ID: ", CLIENT_ID);
console.log("SECRET: ", SECRET);

const app = express();

// Для /static будут доступны все файлы из dist/client
app.use("/static", express.static("./dist/client"));

app.get("/auth", (req, res) => {
  axios
    .post(
      "https://www.reddit.com/api/v1/access_token/",
      // `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${URI}${PORT}/auth`,
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
      {
        auth: { username: CLIENT_ID, password: SECRET },
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      }
    )
    .then(({ data }) => {
      console.log(">>> Authorization is successfully");
      console.log("data: ", data);
      console.log("data[access_token]: ", data["access_token"]);
      res.send(
        indexTemplate(ReactDOM.renderToString(App()), data["access_token"])
      );
    })
    .catch(console.log(">>> Authorization is FAILed!!!"));
});

// WORK RESERVE WERSION
app.get("*", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(3000, () => {
  console.log(`Server started on port http://localhost:${PORT}/`);
});
