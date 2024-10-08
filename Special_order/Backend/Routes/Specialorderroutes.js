const express=require("express");
const router=express.Router();

//Insert Model
const Order=require("../Models/Specialordermodel");
//Insert User Controller
const OrderController=require("../Controllers/Specialordercontroller");

router.get("/",OrderController.getAllOrders);
router.post("/",OrderController.addOrders);
router.get("/:id",OrderController.getById);
router.put("/:id",OrderController.updateOrder);
router.delete("/:id",OrderController.deleteOrder);

module.exports=router
