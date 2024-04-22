const express = require("express");
const createEcgData = require("./services/firebase/ecg")

const app = express();

app.get("/", (req, res) => {
  const lowAlpha = Number(req.query.lowalpha);
  const highAlpha = Number(req.query.highalpha);
  const lowBeta = Number(req.query.lowbeta);
  const highBeta = Number(req.query.highbeta);
  const lowGamma = Number(req.query.lowgamma);
  const midGamma = Number(req.query.midgamma);
  const delta = Number(req.query.delta);
  const theta = Number(req.query.theta);
  createEcgData(lowAlpha, highAlpha, lowBeta, highBeta,
  lowGamma, midGamma, theta, delta)
  res.send("done")
});

app.listen(10000, () => {
  console.log("Sever is up on port 8000");
});
