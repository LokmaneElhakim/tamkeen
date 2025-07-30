const Startup = require('../models/startup.model');

module.exports = {
  create: async (req, res) => {
    try {
      const newStartup = await Startup.create(req.body);
      res.status(201).json(newStartup);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Creation failed', details: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const data = await Startup.findAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve startups' });
    }
  },

  getById: async (req, res) => {
    try {
      const data = await Startup.findById(req.params.id);
      if (!data) return res.status(404).json({ error: 'Startup not found' });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching startup' });
    }
  },

  update: async (req, res) => {
    try {
      const updated = await Startup.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'Startup not found' });
      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json({ error: 'Update failed' });
    }
  },

  remove: async (req, res) => {
    try {
      const deleted = await Startup.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Startup not found' });
      res.status(200).json({ message: 'Deleted successfully', deleted });
    } catch (err) {
      res.status(500).json({ error: 'Delete failed' });
    }
  }
};
