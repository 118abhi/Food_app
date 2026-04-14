import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2 } from 'lucide-react'

const Cart = () => {
    const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext)
    const navigate = useNavigate()

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="cart"
    >
      <div className="cart-items">
        <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
        <AnimatePresence>
        {food_list.map((item, index) => {
            if(cartItems[item._id] > 0) {
                return (
                    <motion.div
                        key={item._id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <div className="cart-items-title cart-items-item">
                            <img src={item.image} alt={item.name}/>
                            <p>{item.name}</p>
                            <p>₹{item.price}</p>
                            <div className="quantity-badge">{cartItems[item._id]}</div>
                            <p>₹{item.price * cartItems[item._id]}</p>
                            <motion.div
                                whileHover={{ scale: 1.2, color: "#ff6347" }}
                                onClick={() => removeFromCart(item._id)}
                                className="cross"
                            >
                                <Trash2 size={18} />
                            </motion.div>
                        </div>
                        <hr />
                    </motion.div>
                )
            }
            return null;
        })}
        </AnimatePresence>
      </div>
      <div className="cart-bottom">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cart-total"
        >
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
                onClick={() => navigate('/order')}
                disabled={getTotalCartAmount() === 0}
            >
                PROCEED TO CHECKOUT
            </motion.button>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cart-promocode"
        >
            <div>
                <p>If you have a promo code, enter it here</p>
                <div className="cart-promocode-input">
                    <input type="text" placeholder='Promo Code' />
                    <button>Submit</button>
                </div>
            </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Cart
