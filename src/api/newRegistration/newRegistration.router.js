const { Router } = require('express');
const newRegistrationController = require('./newRegistration.controller.js');

module.exports = () => {
  const router = Router();

  router.post('', async (req, res) => {
    res.send(await newRegistrationController(req.body));
  });

  return router;
};