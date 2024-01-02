import userModel from "../../../../data_base/models/user.model.js"

const getAllUsers = async(req,res) =>{
    const users = await userModel.find().select("-email -age"); //will return every thing except for email nor age^^
    // const users = await userModel.findById("6592f5771af303c4e41a6e3c",{age:0,email:0}); //will return every thing except for email nor age^^
    res.json({message:"getAllUsers",users})
}

const addUser = async(req,res) =>{
    let {name,age,email,password} =req.body;
    const addedUser = await userModel.insertMany({name,age,email,password});
    res.json({message:"addUser",addedUser})
}


const updateUser = async(req,res) =>{
    let {_id,name} =req.body;
    // const updatedUser = await userModel.findByIdAndUpdate(_id, {name}); //this will update and return old object
    const updatedUser = await userModel.findByIdAndUpdate(_id, {name},{new:true}); 
    res.json({message:"updateUser",updatedUser})
}

const deleteUser = async(req,res) =>{
    let {_id} =req.body;
    const deletedUser = await userModel.deleteOne({_id});
    res.json({message:"deleteUser",deletedUser});
}


export {getAllUsers,addUser,updateUser,deleteUser}