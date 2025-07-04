const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact.js");

// POST Contact Form
router.post("/", async (req, res) => {
  try {
    console.log("📩 Incoming contact data:", req.body);

    const newMessage = new Contact(req.body);
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ Failed to save message:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// GET all messages view in Postman)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

module.exports = router;
