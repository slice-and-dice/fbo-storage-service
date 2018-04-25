const { Router } = require('express');
const newRegistration = require('./newRegistration');
const getFBOs = require('./getFBOs');

module.exports = () => {
  const router = Router();

  router.use('/newregistration', newRegistration());
  router.use('/getFBOs', getFBOs());

  return router;
};