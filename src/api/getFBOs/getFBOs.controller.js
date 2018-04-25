const FBO = require('../../db/models/FBO');

const getAllFBOs = async () => {
  const FBOs = await FBO.findAll();
  return FBOs;
}

const getFBOByID = async (id) => {
  const response = await FBO.findOne({ where: {fsa_rn: id} });
  return response;
}

module.exports = { getAllFBOs, getFBOByID };