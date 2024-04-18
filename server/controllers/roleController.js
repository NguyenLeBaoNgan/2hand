
const Role = require('../models/roleModel');


exports.getRoles = async (req, res) => {
    const roles = await Role.find();
    res.json(roles);
  };
  