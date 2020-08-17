const router = require("express").Router();
//add restricted middleware to functions
//const restricted = require("../auth/authenticate-middleware.js");
const Users = require("./usersModel.js");

router.get("/", (req, res) => {
  Users.getUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  Users.getUsers(req.params.id)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Users.remove(req.params.id);
    res
      .status(200)
      .json({ message: `${req.params.id} DELETED`, Users: req.Users });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
