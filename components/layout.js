/* eslint-disable react/react-in-jsx-scope */
import styles from '../styles/layout.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

const portfolioText = 'Portfolio'.split('')
const experienceText = 'Experience'.split('')
const contactText = 'Contact'.split('')

export default function Layout({ children }) {
  return (
        <div className={styles.container}>
            <motion.div className={styles.navBar} initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 2 }} >
                <Link href='/'>
                    <motion.a 
                        className={styles.logo}
                        initial={{ x: '-8vw' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 120 }}
                    >
                        <motion.div whileHover={{ scale: 1.1 }} >
                            <img src='images/logo-svg.svg'/>
                        </motion.div>
                    </motion.a>
                </Link>
                <div className={styles.navLinksBox}>
                    <Link href='/portfolio'>
                        <motion.div 
                            className={styles.navLinks}
                            initial={{ x: '20vw' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1, type: 'spring', stiffness: 70 }}
                            whileHover={{ scale: 1.1 }}
                        >
                        {
                            portfolioText.map((letter, index) => (
                                <motion.a 
                                    className={styles.navLinkLetters}
                                    key={index}
                                    whileHover={{ color: '#f9f7f6', textShadow: '0px 0px 5px #f9f7f6' }}
                                >
                                    {letter}
                                </motion.a>
                            ))
                        }
                        </motion.div>
                    </Link>
                    <Link href='/experience'>
                    <motion.div 
                            className={styles.navLinks}
                            initial={{ x: '20vw' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1, type: 'spring', stiffness: 70 }}
                            whileHover={{ scale: 1.1 }}
                        >
                        {
                            experienceText.map((letter, index) => (
                                <motion.a 
                                    className={styles.navLinkLetters}
                                    key={index}
                                    whileHover={{ color: '#f9f7f6', textShadow: '0px 0px 5px #f9f7f6' }}
                                >
                                    {letter}
                                </motion.a>
                            ))
                        }
                        </motion.div>
                    </Link>
                    <Link href='/contact'>
                    <motion.div 
                            className={styles.navLinks}
                            initial={{ x: '20vw' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1, type: 'spring', stiffness: 70 }}
                            whileHover={{ scale: 1.1 }}
                        >
                        {
                            contactText.map((letter, index) => (
                                <motion.a 
                                    className={styles.navLinkLetters}
                                    key={index}
                                    whileHover={{ color: '#f9f7f6', textShadow: '0px 0px 5px #f9f7f6' }}
                                >
                                    {letter}
                                </motion.a>
                            ))
                        }
                        </motion.div>
                    </Link>
                </div>
            </motion.div>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}