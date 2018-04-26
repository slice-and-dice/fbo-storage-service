const FBO = require('./models/FBO');

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
    import_export: ['Import'],
    supplies_to: ['B2C'],
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