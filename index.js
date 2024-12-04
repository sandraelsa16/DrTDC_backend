require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./Router/router");
require("./DB/connection")
const umServer = express();

umServer.use(cors());
umServer.use(express.json());
umServer.use(router);

const PORT = 4000;

umServer.listen(PORT, () => {
  console.log("User Server started on port " + PORT);
});

umServer.get("/"),
  (req, res) => {
    res
      .status(200)
      .send(
        "<h1 style=color:red>Lab Management server running and wait to client request</h1>"
      );
  };
