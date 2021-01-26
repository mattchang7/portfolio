/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import '../styles/global.css'
import styles from '../styles/layout.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const navLinks = ['portfolio', 'experience', 'contact']

export default function App({ Component, pageProps, router }) {
    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <div className={styles.container}>
                <motion.div
                    className={styles.navBar}
                    variants={navBarVariants}
                    initial='hidden'
                    animate='visible'
                >
                    <div className={styles.logoLinkBox}>
                        <Link href='/'>
                            <motion.a 
                                className={styles.logo}
                                variants={logoVariants}
                                whileHover='hover'
                            >
                                <img src='images/logo-svg.svg'/>
                            </motion.a>
                        </Link>
                    </div>
                    <div className={styles.navLinksBox}>
                    {
                        navLinks.map((navLink, index) => (
                            <Link href={`/${navLink}`} key={index} >
                                <motion.div
                                    className={(router.pathname === `/${navLink}`) ? `${styles.navLinks} ${styles.selected}` : `${styles.navLinks}`}
                                    variants={navLinksVariants}
                                    whileHover='hover'
                                >
                                <a className={styles.navLinkLetters}>{navLink}</a>
                                </motion.div>
                            </Link>
                        ))
                    }
                    </div>
                </motion.div>
                <Component {...pageProps} />
            </div>
        </AnimatePresence>
    )
}

const navBarVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } }
}

const logoVariants = {
    hidden: { x: '-8vw' },
    visible: { x: 0, transition: { duration: 1, delay: 0.5, type: 'spring', stiffness: 120 } },
    hover: { scale: 1.1, rotate: [360, 0], transition: { duration: 0.2 } }
}

const navLinksVariants = {
    hidden: { x: '20vw' },
    visible: { x: 0, transition: { duration: 1, type: 'spring', stiffness: 70 } },
    hover: { scale: 1.1 }
}

// const lettersVariants = {
//     hover: { textShadow: '0px 0px 5px #aa98b6' }
// }
