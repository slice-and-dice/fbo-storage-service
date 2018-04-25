const FBO = require('../../db/models/FBO');

const getAllFBOs = async () => {
  winston.info('get all fbo controller called');
  const FBOs = await FBO.findAll();
  winston.info('get all fbo controller successful');
  return FBOs;
}

const getFBOByID = async (id) => {
  winston.info('get all fbo by id controller called');
  const response = await FBO.findOne({ where: {fsa_rn: id} });
  winston.info('get all fbo by id controller successful');
  return response;
}

module.exports = { getAllFBOs, getFBOByID };