const roleModel = require('../models/RoleModel');

const createRole = async (req,res) => {

    try{

        const savedRole = await roleModel.create(req.body);
        res.status(201).json({
            message:"Role Created",
            flag:1,
            data:savedRole
        })
    }catch(error){

        res.status(500).json({
            message: "Server Error",
            flag: -1,
            data:error
        })
    }
}

const getRoles = async (req, res) => {
    
    try{

        const roles = await roleModel.find();
        res.status(200).json({
            message:"Roles Fetched",
            flag: 1,
            data:roles
        })
    }catch(error){

        res.status(500).json({
            message: "Server Error",
            flag: -1,
            data:error
        })
    }
}

module.exports = {
    createRole,
    getRoles
}