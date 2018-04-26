const Sequelize = require('sequelize');
const db = require('../init');

const FBO = db.define('fbo', {
  registration_type: {
    type: Sequelize.STRING
  },
  registration_role: {
    type: Sequelize.STRING
  },
  operator_first_name: {
    type: Sequelize.STRING
  },
  operator_last_name: {
    type: Sequelize.STRING
  },
  operator_postcode: {
    type: Sequelize.STRING
  },
  operator_address: {
    type: Sequelize.STRING
  },
  operator_contact_type: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  operator_contact_number: {
    type: Sequelize.STRING
  },
  operator_email: {
    type: Sequelize.STRING
  },
  operator_type: {
    type: Sequelize.STRING
  },
  operator_company_name: {
    type: Sequelize.STRING
  },
  operator_company_house_number: {
    type: Sequelize.STRING
  },
  operator_charity_name: {
    type: Sequelize.STRING
  },
  operator_charity_number: {
    type: Sequelize.STRING
  },
  establishment_name: {
    type: Sequelize.STRING
  },
  establishment_postcode: {
    type: Sequelize.STRING
  },
  establishment_address: {
    type: Sequelize.STRING
  },
  domestic_premise: {
    type: Sequelize.BOOLEAN
  },
  secure_government_facility: {
    type: Sequelize.BOOLEAN
  },
  establishment_contact_type: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  operator_contact_number: {
    type: Sequelize.STRING
  },
  operator_email: {
    type: Sequelize.STRING
  },
  trading_date: {
    type: Sequelize.DATE
  },
  import_export: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  supplies_to: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  business_type: {
    type: Sequelize.STRING
  },
  food_activities: {
    type: Sequelize.STRING
  },
  high_risk_activities: {
    type: Sequelize.BOOLEAN
  },
  registration_free_text: {
    type: Sequelize.STRING
  },
  fsa_rn: {
    type: Sequelize.STRING
  },
  inspectionRecommendation: {
    type: Sequelize.STRING
  },
  registrationStatus: {
    type: Sequelize.STRING
  },
  sentSuccessfully: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  sendFailed: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  answerIds: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  localAuthority: {
    type: Sequelize.STRING
  }  
});

module.exports = FBO;