const Router = require("express");
const AvatarController = require("../../controllers/AvatarController");
const router = new Router();

router.get("/:steamID", AvatarController.get);

module.exports = router;
