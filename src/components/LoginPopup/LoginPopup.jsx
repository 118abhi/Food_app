import React from 'react'
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const LoginPopup = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Sign Up")

  return (
    <div className="login-popup">
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="login-popup-container"
      >
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <motion.div whileHover={{ scale: 1.2, rotate: 90 }} onClick={() =>setShowLogin(false)}>
                <X size={24} className="close-icon" />
            </motion.div>
        </div>
        <div className="login-popup-inputs">
            <AnimatePresence mode='wait'>
                {currentState === "Sign Up" && (
                    <motion.input
                        key="name"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        type="text"
                        placeholder="Your name"
                        required
                    />
                )}
            </AnimatePresence>
            <input type="email" placeholder="Your email" required/>
            <input type="password" placeholder="Password" required/>
        </div>
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {currentState === "Sign Up" ? "Create Account" : "Login"}
        </motion.button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms and conditions</p>
        </div>
        {currentState === "Login"
        ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p> 
        : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login Here</span></p>}
      </motion.form>
    </div>
  )
}

export default LoginPopup
