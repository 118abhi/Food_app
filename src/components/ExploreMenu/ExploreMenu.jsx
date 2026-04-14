import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import { motion } from 'framer-motion'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Explore our menu
      </motion.h1>
      <motion.p
        className="explore-menu-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </motion.p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    onClick={()=> setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                    key={index}
                    className="explore-menu-list-item"
                >
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={category === item.menu_name ? "active" : ""}
                        src={item.menu_image}
                        alt={item.menu_name}
                    />
                    <p className={category === item.menu_name ? "active-text" : ""}>{item.menu_name}</p>
                </motion.div>
            )
        })}
      </div>
      <hr></hr>
    </div>
  )
}

export default ExploreMenu
