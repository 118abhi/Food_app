import React, { useContext } from 'react'; 
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import { motion } from 'framer-motion';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext); 

    return (
        <div className="food-display" id="food-display">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Top dishes near you
            </motion.h2>
            <motion.div
                layout
                className="food-display-list"
            >
                {food_list.map((item, index) => {
                   if(category === "All" || category === item.category) {
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                   }
                   return null;
                })}
            </motion.div>
        </div>
    );
}

export default FoodDisplay;
