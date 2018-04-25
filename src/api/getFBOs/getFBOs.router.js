const { Router } = require('express');
const getFBOsController = require('./getFBOs.controller.js');

module.exports = () => {
  const router = Router();

  router.get('', async (req, res) => {
    res.send(await getFBOsController.getAllFBOs());
  });

  router.get('/:id', async (req, res) => {
    res.send(await getFBOsController.getFBOByID(req.params.id));
  });

  return router;
};