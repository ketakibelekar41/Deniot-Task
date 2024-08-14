import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './styles.css'

export const Home = () => {
    return (
        <div className='homepage'>
            <header className='homepage-header'>
                <div className='logo'>
                    <img src="" alt='Deniot Logo' />
                </div>
                <nav className='homepage-nav'>
                    <ul>
                        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                            <li><Link to="/">Home</Link></li>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                            <li><Link to="/about">About</Link></li>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                            <li><Link to="/services">Services</Link></li>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                            <li><Link to="/Contact">Contact</Link></li>
                        </motion.li>
                    </ul>
                </nav>
            </header>

            <motion.section className='homepage-banner' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>

                <h1>Welcome to Deniot</h1>
                <p>Leading in Smart Solution</p>
                <Link to="/learnmore" className="banner-button">Learn More</Link>
            </motion.section>
            <section>
                <div className='feature'>
                    <h2>Feature 1 </h2>
                    <p>Description of feature </p>
                </div>
                <div className='feature'>
                    <h2>Feature 2</h2>
                    <p>Description of feature </p>
                </div>
                <div className='feature'>
                    <h2>Feature 3</h2>
                    <p>Description of feature </p>
                </div>
            </section>
            <footer className='homepage-footer'>
                <p>&copy; 2024 Deniot. All rights reserved</p>
            </footer>
        </div>
    )
}
