/* eslint-disable react/react-in-jsx-scope */
import styles from '../styles/layout.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
                        <img src='images/logo-svg.svg'/>
                    </motion.a>
                </Link>
                <div className={styles.navLinksBox}>
                    <Link href='/portfolio'>
                        <motion.a 
                            className={styles.navLinks} 
                            title='Portfolio'
                            initial={{ x: '20vw' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1, type: 'spring', stiffness: 70 }}
                        >
                            Portfolio
                        </motion.a>
                    </Link>
                    <Link href='/experience'>
                        <motion.a 
                            className={styles.navLinks} 
                            title='Experience'
                            initial={{ x: '20vw' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1, delay: 0.25, type: 'spring', stiffness: 70 }}
                        >
                            Experience
                        </motion.a>
                    </Link>
                    <Link href='/contact'>
                        <motion.a 
                            className={styles.navLinks} 
                            title='Contact'
                            initial={{ x: '20vw' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 70 }}
                        >
                            Contact
                        </motion.a>
                    </Link>
                </div>
            </motion.div>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}