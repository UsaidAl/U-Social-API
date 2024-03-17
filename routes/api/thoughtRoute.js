const router = require("express").Router();
const {
    get_all_thoughts,
    get_thought_by_id,
    add_thought,
    update_thought,
    remove_thought,
    add_reaction,
    remove_reaction
} = require("../../controllers/thoughtController");

router
    .route("/")
    .get(get_all_thoughts)
    .post(add_thought);

router
    .route("/:id")
    .get(get_thought_by_id)
    .put(update_thought)
    .delete(remove_thought);

router
    .route("/:thoughtId/reactions")
    .post(add_reaction);

router
    .route("/:thoughtId/reactions/:reactionId")
    .delete(remove_reaction)

module.exports = router;