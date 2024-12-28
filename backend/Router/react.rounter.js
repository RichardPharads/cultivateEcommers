import express from 'express'
import mongoose from 'mongoose'
import Product from '../models/product.model.js'
import { createProducts, deleteProducts, getProducts,  updateProducts } from '../productController/product.controll.js'

const router = express.Router()
router.get('/' ,getProducts)

router.post('/', createProducts)


router.put('/:id', updateProducts)


router.delete('/:id', deleteProducts)

export default router