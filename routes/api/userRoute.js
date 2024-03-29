const router = require("express").Router();
const {
  get_all_users,
  get_user_by_id,
  add_user,
  update_user,
  remove_user,
  add_friend,
  remove_friend,
} = require("../../controllers/userController");

router.route("/").get(get_all_users).post(add_user);

router.route("/:id").get(get_user_by_id).put(update_user).delete(remove_user);

router.route("/:id/friends/:friendId").post(add_friend);

router.route("/:id/friends/:friendId").delete(remove_friend);

module.exports = router;
