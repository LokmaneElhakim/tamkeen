// routes/participants.js
const express = require("express");
const router = express.Router();
const ParticipantController = require("../controllers/participant.controller.js");

router.post("/", ParticipantController.create);
router.post("/bulk", ParticipantController.createMany);
router.get("/", ParticipantController.getAll);
router.get("/stats", ParticipantController.getStats);
router.get("/track/:track", ParticipantController.getByTrack);
router.get("/:id", ParticipantController.getById);
router.put("/:id", ParticipantController.update);
router.delete("/:id", ParticipantController.delete);
module.exports = router;
