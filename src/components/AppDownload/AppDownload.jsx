import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        For Better Experience Download <br/> <span className="brand-name">Foodly App</span>
      </motion.p>
      <div className="app-download-platforms">
        <motion.img
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.95 }}
            src={assets.play_store}
            alt="Play Store"
        />
        <motion.img
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.95 }}
            src={assets.app_store}
            alt="App Store"
        />
      </div>
    </div>
  )
}

export default AppDownload
