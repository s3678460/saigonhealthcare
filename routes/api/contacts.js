const express = require("express");
const router = express.Router();
const randomNumber = require('random-number');
const joi = require('joi');
const randomstring = require('randomstring');

// Load Validation
const validateSubmitInput = require('../../validation/submit');

// Load Model
const Contact = require("../../models/Contact");

//@route GET api/contacts
//GET all contacts
//access public
router.get("/", (req,res) => {
  const errors = {};

  Contact.find()
  .then(contacts => {
    if(contacts.length === 0){
      errors.nocontact='There is no contact'
      res.status(404).json(errors)
    }
    res.json(contacts)
  })
  .catch(err => res.status(500).json({msg: 'Server Error'}))
});

//@route POST api/contacts/submit
//POST new contact
//access public
router.post("/submit", ( req,res ) =>{

  const { errors, isValid } = validateSubmitInput(req.body);
  const result = joi.validate(req.body);

  //Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  const lotteryNumber = randomstring.generate(5);
  result.value.lotteryNumber = lotteryNumber;

  const newContact = new Contact({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      addressNumber: req.body.addressNumber,
      ward: req.body.ward,
      district: req.body.district,
      city: req.body.city,
      dob: req.body.dob,
      gender: req.body.gender,
      lotteryNumber: req.body.lotteryNumber
  });
  newContact
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

module.exports = router;