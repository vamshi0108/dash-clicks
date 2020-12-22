const express = require("express");
const User = require("../models/user");
const router = new express.Router();

//Create the User
router.post("/users", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  console.log(user);
  try {
    await user.save();
    res.status(200).send({ user });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.get("/users/me", async (req, res) => {
  res.send(req.user);
});

//Update the user
router.patch("/users/me", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["email"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Delete the user
router.delete("/users/me", async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
