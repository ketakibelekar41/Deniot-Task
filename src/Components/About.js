import React from 'react'
import { motion } from 'framer-motion'
export const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h1>About Us</h1>
            <p>This is the about page content

            </p>
        </motion.div>
    )
}
