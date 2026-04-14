import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { motion } from 'framer-motion'

const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="place-order"
    >
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
            <div className="multi-fields">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
            </div>
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Street" />
            <div className="multi-fields">
                <input type="text" placeholder="City"/>
                <input type="text" placeholder="State"/>
            </div>
            <div className="multi-fields">
                <input type="text" placeholder="Zip Code"/>
                <input type="text" placeholder="Country"/>
            </div>
            <input type="tel" placeholder="Phone" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Totals</h2>
            <div className="total-container">
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
                </div>
                <hr />
                <div className="cart-total-details important">
                    <b>Total </b>
                    <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                </div>
            </div>
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                PROCEED TO PAYMENT
            </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default PlaceOrder
