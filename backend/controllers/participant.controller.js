const ParticipantModel = require("../models/participant.model");
// Updated ParticipantController with detailed debugging
const ParticipantController = {
  // Create single participant with debugging
  create: async (req, res) => {
    try {
      console.log("=== DEBUG: CREATE PARTICIPANT ===");
      console.log("Request body:", JSON.stringify(req.body, null, 2));
      console.log("Request headers:", req.headers);
      console.log("Content-Type:", req.headers["content-type"]);

      // Check if body exists
      if (!req.body) {
        console.log("ERROR: req.body is null or undefined");
        return res.status(400).json({
          success: false,
          error: "No data received",
          details: "Request body is empty",
        });
      }

      // Check specific field
      console.log("full_name value:", req.body.full_name);
      console.log("full_name type:", typeof req.body.full_name);

      // Log all keys in the request body
      console.log("Request body keys:", Object.keys(req.body));

      const participant = await ParticipantModel.create(req.body);

      res.status(201).json({
        success: true,
        message: "Participant created successfully",
        data: participant,
      });
    } catch (error) {
      console.error("Error details:", error);
      res.status(400).json({
        success: false,
        error: "Creation failed",
        details: error.message,
      });
    }
  },

  // Create multiple participants with debugging
  createMany: async (req, res) => {
    try {
      console.log("=== DEBUG: CREATE MANY PARTICIPANTS ===");
      console.log("Request body type:", typeof req.body);
      console.log("Is array:", Array.isArray(req.body));
      console.log("Length:", req.body?.length);

      if (req.body && req.body.length > 0) {
        console.log("First participant:", JSON.stringify(req.body[0], null, 2));
        console.log("First participant keys:", Object.keys(req.body[0]));
        console.log("First participant full_name:", req.body[0].full_name);
      }

      if (!Array.isArray(req.body)) {
        return res.status(400).json({
          success: false,
          error: "Invalid data format",
          details: "Expected an array of participants",
        });
      }

      const participants = await ParticipantModel.createMany(req.body);

      res.status(201).json({
        success: true,
        message: `${participants.length} participants created successfully`,
        data: participants,
      });
    } catch (error) {
      console.error("Error creating participants:", error);
      res.status(400).json({
        success: false,
        error: "Bulk creation failed",
        details: error.message,
      });
    }
  },
};
