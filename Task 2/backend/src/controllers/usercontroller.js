const db = require("../config/connectionDb");

class AddNotes {
  constructor() {}
  notesData = async (req, res) => {
    const { notesdata } = req.body;
    db.query(
      `INSERT INTO notedata (notesdata) VALUES ('${notesdata}')`,
      (err, rows) => {
        if (!err) {
          // console.log(rows);
          res.status(201).send(req.body);
        } else {
          // console.error(err);
          res.status(400).send(err);
        }
      }
    );
  };

  allNotes = async (req, res) => {
    // const user = req.body;
    db.query("SELECT * FROM notedata", (err, rows) => {
      if (!err) {
        console.log(rows);
        res.status(200).send(rows);
      } else res.status(400).send(err);
    });
  };

  deleteNote = async (req, res) => {
    const noteId = req.params.id;

    // Ensure that noteId is defined before proceeding with the deletion
    if (noteId === undefined || noteId === null) {
      return res.status(400).json({ error: "Invalid noteId" });
    }

    // Now, you can use the noteId in your DELETE query
    db.query(
      "DELETE FROM notedata WHERE id = ?",
      [noteId],
      (err, result) => {
        if (!err) {
          // console.log(result);
          res.status(200).json({ message: "Note deleted successfully" });
        } else {
          // console.error(err);
          res.status(500).json({ error: "Internal Server Error" });
        }
      }
    );
  };
}

module.exports = new AddNotes();
