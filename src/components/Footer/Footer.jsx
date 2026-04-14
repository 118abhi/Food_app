import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="footer-content-left"
        >
          <img src={assets.logo} alt="Foodly" className="footer-logo" />
          <p>Delivering the finest flavors straight to your doorstep. Experience culinary excellence with every order.</p>
          <div className="footer-social-icons">
            <motion.img whileHover={{ scale: 1.2, y: -5 }} src={assets.facebook_icon} alt="Facebook" />
            <motion.img whileHover={{ scale: 1.2, y: -5 }} src={assets.twitter_icon} alt="Twitter" />
            <motion.img whileHover={{ scale: 1.2, y: -5 }} src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="footer-content-center"
        >
          <h2>COMPANY</h2>
          <ul>
            <motion.li whileHover={{ x: 5, color: "#ff6347" }}>Home</motion.li>
            <motion.li whileHover={{ x: 5, color: "#ff6347" }}>About Us</motion.li>
            <motion.li whileHover={{ x: 5, color: "#ff6347" }}>Delivery</motion.li>
            <motion.li whileHover={{ x: 5, color: "#ff6347" }}>Privacy Policy</motion.li>
          </ul>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="footer-content-right"
        >
          <h2>GET IN TOUCH</h2>
          <ul>
            <motion.li whileHover={{ x: 5, color: "#ff6347" }}>+91 97937 33323</motion.li>
            <motion.li whileHover={{ x: 5, color: "#ff6347" }}>contact@foodly.com</motion.li>
          </ul>
        </motion.div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Foodly.com - All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
