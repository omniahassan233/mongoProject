import  express from "express";
import * as userController from "./controller/user.controller.js"
const router = express.Router();

router.get("/",userController.getAllUsers);
router.post("/",userController.addUser);
router.put("/",userController.updateUser);
router.delete("/",userController.deleteUser);

export default router;