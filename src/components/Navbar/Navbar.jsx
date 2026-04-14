import React, { useState, useContext, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { motion } from 'framer-motion'
import { Search, ShoppingBasket } from 'lucide-react'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home")
    const {getTotalCartAmount} = useContext(StoreContext)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Link to='/'>
        <motion.img
            whileHover={{ scale: 1.05 }}
            src={assets.logo}
            alt="Foodly"
            className="logo"
        />
      </Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <motion.div whileHover={{ scale: 1.1 }} className="icon-container">
            <Search size={24} color="#49557e" />
        </motion.div>
        <div className="navbar-search-icon">
            <Link to='/cart'>
                <motion.div whileHover={{ scale: 1.1 }} className="icon-container">
                    <ShoppingBasket size={24} color="#49557e" />
                </motion.div>
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowLogin(true)}
        >
            Sign In
        </motion.button>
      </div>
    </nav>
  )
}

export default Navbar
