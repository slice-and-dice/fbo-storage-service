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
    type: Sequelize.STRING
  },
  supplies_to: {
    type: Sequelize.STRING
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
// force: true will drop the table if it already exists
FBO.sync({force: true}).then(() => {
  // Table created
  return FBO.create({
    registration_type: 'test',
    registration_role: 'fbo',
    operator_first_name: 'Kiran',
    operator_last_name: 'Snaith',
    operator_postcode: 'SW12 9RQ',
    operator_address: '1234 Fake St.',
    operator_contact_type: ['fax', 'email'],
    operator_contact_number: '123455',
    operator_email: 'kiran@gmail.com',
    operator_type: 'sole trader',
    operator_company_name: 'Kirans K-Babs',
    operator_company_house_number: '123K',
    operator_charity_name: '',
    operator_charity_number: '',
    establishment_name: 'Kirans K-Babs',
    establishment_postcode: 'SW12 9RQ',
    establishment_address: '21 Fake St',
    domestic_premise: false,
    secure_government_facility: false,
    establishment_contact_type: ['fax', 'email'],
    operator_contact_number: '123455',
    operator_email: 'kiran@gmail.com',
    trading_date: '2001-02-16',
    import_export: 'Import',
    supplies_to: 'B2C',
    business_type: 'retailer',
    food_activities: 'open cooking',
    high_risk_activities: false,
    registration_free_text: '',
    fsa_rn: 'ksjdg0098',
    inspectionRecommendation: 'Full inspection',
    registrationStatus: 'verifed',
    sentSuccessfully: ['123'],
    sendFailed:[''],
    answerIds: ['001', '002'],
    localAuthority: '123'
  });
});

module.exports = FBO;