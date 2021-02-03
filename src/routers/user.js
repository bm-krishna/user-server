const express = require("express");
const router = express.Router();

router.get("/info", (req, resp) => {
  return resp.json({
    message: "this is /user/info resource handler",
    status: 200,
  });
});

router.post("/login", loginHandler);

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

details.age = 23;
router.module.exports = router;
