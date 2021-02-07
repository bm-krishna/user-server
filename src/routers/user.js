const express = require("express");
const router = express.Router();

router.get("/info", (req, resp) => {
  return resp.json({
    message: "mobbu mohamaa",
    status: 200,
  });
});

const loginHandler = (req, resp) => {
  const payload = req.body;
  const { userName, password } = payload;
  if (userName === "mk" && password === "mk") {
    return resp.json({
      message: "login success full",
    });
  }
  return resp.status(403).json({
    message: "login failed",
  });
};

router.post("/login", loginHandler);

module.exports = router;
