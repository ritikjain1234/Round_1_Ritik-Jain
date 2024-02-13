const express = require("express");
const router = express.Router();
const AddNotes = require("../controllers/usercontroller")

router.route("/").post(AddNotes.notesData);
router.route("/all").get(AddNotes.allNotes);
router.route("/delete/:id").delete(AddNotes.deleteNote);


module.exports = router;