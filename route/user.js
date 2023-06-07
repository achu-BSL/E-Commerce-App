const express = require('express');
const Router = express.Router();

// Routers
const userMiddlewear = require('../middleWeare/user');
const userControler = require('../controllers/userControllers');
const profileController =require('../controllers/profileController');
Router.get('/login',userMiddlewear.isLogOut, userControler.login);
Router.post('/login', userControler.validation);

// Sign up
Router.get('/signUp',userMiddlewear.isLogOut,userControler.signup);
Router.post('/register', userControler.registerUser);
Router.post('/validation', userControler.OTPValidation);

// success
Router.get('/success',userControler.successTick);
Router.get('/',userMiddlewear.islogin,userMiddlewear.userIsBlocked, userControler.home);

// View Product detaild view
Router.get('/detaildView/:id',userMiddlewear.userIsBlocked, userControler.detaildView);


// profile 
Router.get('/profile',userMiddlewear.userCheking,userMiddlewear.userIsBlocked, profileController.profile);
Router.get('/profile/order',userMiddlewear.userCheking,userMiddlewear.userIsBlocked, profileController.order);
Router.post('/profile/order/:id',userMiddlewear.userCheking,userMiddlewear.userIsBlocked, profileController.orderCancel);
Router.get('/profile/address',userMiddlewear.userCheking,userMiddlewear.userIsBlocked,profileController.profileAddress);
Router.post('/profile/address/editAddress',userMiddlewear.userCheking,userMiddlewear.userIsBlocked,profileController.editAddress);
Router.post('/profile/address/updateAddress',userMiddlewear.userCheking,userMiddlewear.userIsBlocked,profileController.newAddress);
Router.post('/profileUpdate',userMiddlewear.userCheking,userMiddlewear.userIsBlocked, profileController.profileUpdate);

// Cart
Router.get('/cart',userMiddlewear.userCheking,userMiddlewear.userIsBlocked, userControler.cartload);
Router.post('/cart/:id',userMiddlewear.userCheking,userMiddlewear.userIsBlocked, userControler.cart);
Router.post('/cart/update/:id',userMiddlewear.userCheking,userMiddlewear.userIsBlocked, userControler.cart);
Router.post('/cartDelete/:id',userControler.cartDelete);

// CheckOut 
Router.get('/CheckOut',userMiddlewear.userCheking,userMiddlewear.userIsBlocked,userControler.Checkout);
Router.post('/CheckOut',userMiddlewear.userCheking,userMiddlewear.userIsBlocked,userControler.addressAdding);
Router.post('/checkOut/orderSuccess',userMiddlewear.userCheking,userMiddlewear.userIsBlocked,userControler.orderSuccess)

// Logout
Router.get('/logout', userControler.logOut);

module.exports = Router;