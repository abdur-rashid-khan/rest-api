const express = require('express');
const { postProducts } = require('../controllers/products.controller');
const { getAllUser } = require('../controllers/user.controllers');
const router = express.Router();

// user get api disc
/**
    * @api : ""
    * @apiDescription :""
    * @apiPermission : " "
    * @apiHeader : ""
    * @apiParam : ""
    * @apiParam : ""
    * @apiSuccess : ""
    * @apiError : ""
    * @apiError : ""
    */
router.get('/', getAllUser)
// products post
/**
    * @api : ""
    * @apiDescription :""
    * @apiPermission : " "
    * @apiHeader : ""
    * @apiParam : ""
    * @apiParam : ""
    * @apiSuccess : ""
    * @apiError : ""
    * @apiError : ""
    */
router.post('/', postProducts)

module.exports = router;