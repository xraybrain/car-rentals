const router = require("express").Router();
const {
  login,
  getCurrentUser,
  changePassword,
} = require("../controllers/Auth.controller");
router.post("/auth/login/", login);
router.get("/auth/currentuser/", getCurrentUser);
router.put("/auth/change/password/", changePassword);

module.exports = router;
