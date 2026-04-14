import { useState, useContext } from 'react'
import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'


const FoodItem = ({id, name, price, description, image}) => {
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)
   return (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="food-item"
    >
        <div className="food-item-img-container">
            <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="food-item-image"
                src={image}
                alt={name}
            />
            <AnimatePresence>
            {!cartItems[id]
                ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="add-btn-container"
                        onClick={() => addToCart(id)}
                    >
                        <Plus size={20} color="#ff6347" />
                    </motion.div>
                )
                : (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="food-item-counter"
                    >
                        <motion.div whileTap={{ scale: 0.8 }} onClick={() => removeFromCart(id)} className="counter-btn">
                            <Minus size={18} color="red" />
                        </motion.div>
                        <p>{cartItems[id]}</p>
                        <motion.div whileTap={{ scale: 0.8 }} onClick={() => addToCart(id)} className="counter-btn">
                            <Plus size={18} color="green" />
                        </motion.div>
                    </motion.div>
                )
            }
            </AnimatePresence>
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">₹{price}</p>
        </div>
    </motion.div>
   )
}

export default FoodItem
