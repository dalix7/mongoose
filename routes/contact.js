// 1- - require express
const express = require("express");

// 2- express router

const router = express.Router();

// 3 - require model Contact (importation)

const Contact = require("../models/Contact");

// Routes

/// test route

router.get("/test", (req, res) => {
  res.send("hello word");
});

// ADD CONTACT

router.post("/add", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newContact = new Contact({ name, email, phone });
    await newContact.save();
    res.status(200).send({ msg: "contact added SUCC..", newContact });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "failed to add contactcan not add contact !! ", error });
  }
});

// gat all contact
router.get("/getall", async (req, res) => {
  try {
    const listContacts = await Contact.find();
    res
      .status(200)
      .send({ msg: "this is the list of all contact ...", listContacts });
  } catch (error) {
    res.status(400).send({ msg: "failed to get the clients list !!", error });
  }
});

//get one contact

router.get("/:id", async (req, res) => {
  try {
    const contactToGet = await Contact.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "found contact by id", contactToGet });
  } catch (error) {
    res.status(400).send({ msg: "failed to get the user with this id !!" });
  }
});

// delete contact

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Contact.findOneAndDelete({ _id });
    res.status(200).send({ msg: "contact deleted SUCC" });
  } catch (error) {
    res.status(400).send({ msg: "failed to delete the Contact" });
  }
});

// edit contact

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Contact.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send({ msg: "contact updated SUCC" });
  } catch (error) {
    res.status(400).send({ msg: "failed to upate the user" });
  }
});

// 4 - export

module.exports = router;
