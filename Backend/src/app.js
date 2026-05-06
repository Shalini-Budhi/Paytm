import express from "express";
import http from "http";
const app = express();

app.get("/", (req, res) => {
  try {
    console.log("working fine)");
  } catch (error) {
    console.log("adhahhdh");
  }
});

export default app;
// modules.exports = app
