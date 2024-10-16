const Order = require('../Models/Specialordermodel');

// Displaying all orders
const getAllOrders = async (req, res, next) => {
    let Orders;
    try {
        Orders = await Order.find(); // finding every note and displaying
    } catch (err) {
        console.log(err);
    }
    if (!Orders) {
        return res.status(404).json({ message: "Orders not found" });
    }
    return res.status(200).json({ Orders });
};

// Inserting orders
const addOrders = async (req, res, next) => {
    const { contactname, typeofuser, contactemail, address, listofitems, prefereddate, preferedtime, totalweight, totalamount, status } = req.body;
    let orders;
    try {
        orders = new Order({ contactname, typeofuser, contactemail, address, listofitems, prefereddate, preferedtime, totalweight, totalamount, status });
        await orders.save(); // save the inserted details in the database
    } catch (err) {
        console.log(err);
    }
    if (!orders) {
        return res.status(404).json({ message: "Unable to add orders" });
    }
    return res.status(200).json({ orders });
};

// Get by ID
const getById = async (req, res, next) => {
    const id = req.params.id;
    let order;
    try {
        order = await Order.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json({ order });
};

// Update order details
const updateOrder = async (req, res, next) => {
    const id = req.params.id;
    const { contactname, typeofuser, contactemail, address, listofitems, prefereddate, preferedtime, totalweight, totalamount, status } = req.body;
    let orders;
    try {
        orders = await Order.findByIdAndUpdate(id, { contactname, typeofuser, contactemail, address, listofitems, prefereddate, preferedtime, totalweight, totalamount, status }, { new: true }); // finding the particular Order and updating
    } catch (err) {
        console.log(err);
    }
    if (!orders) {
        return res.status(404).json({ message: "Unable to update order details" });
    }
    return res.status(200).json({ orders });
};

// Delete order details
const deleteOrder = async (req, res, next) => {
    const id = req.params.id;
    let order;
    try {
        order = await Order.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }
    if (!order) {
        return res.status(404).json({ message: "Unable to delete order" });
    }
    return res.status(200).json({ order });
};

// Update order status
const updateStatus = async (req, res, next) => {
    const { _id, status } = req.body;
    let order;
    try {
        order = await Order.findByIdAndUpdate(_id, { status }, { new: true });
    } catch (err) {
        console.log(err);
    }
    if (!order) {
        return res.status(404).json({ message: "Unable to update order status" });
    }
    return res.status(200).json({ order });
};

// Exporting all functions
exports.getAllOrders = getAllOrders;
exports.addOrders = addOrders;
exports.getById = getById;
exports.updateOrder = updateOrder;
exports.deleteOrder = deleteOrder;
exports.updateStatus = updateStatus;
