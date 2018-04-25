const FBO = require('../../db/models/FBO');

module.exports = async (data) => {
  created = await FBO.create(data);
  return created.fsa_rn;
}