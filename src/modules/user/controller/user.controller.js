const getAllUsers = (req,res) =>{
    res.json({message:"getAllUsers"})
}

const addUser = (req,res) =>{
    res.json({message:"addUser"})
}


const updateUser = (req,res) =>{
    res.json({message:"updateUser"})
}

const deleteUser = (req,res) =>{
    res.json({message:"deleteUser"})
}


export {getAllUsers,addUser,updateUser,deleteUser}