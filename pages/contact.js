/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { motion } from 'framer-motion'

const transition = { duration: 0.6, ease: [ 0.43, 0.13, 0.23, 0.96 ] }

export default function Contact() {
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Contact</title>
                    <link rel='icon' href='/public/images/logo-icon.ico'/>
                </Head>
                <div className={utilStyles.contactContainer}>
                    <motion.h4 
                        initial={{ y: '30vh', opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ duration: 0.6, type: 'spring', stiffness: 50, delay: 0.3}}
                    ><i className="fas fa-thumbtack fa-sm" width={0} />    New York, NY</motion.h4>
                    <motion.h4 
                        initial={{ y: '30vh', opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ duration: 0.6, type: 'spring', stiffness: 50, delay: 0.5}}
                    ><i className="fas fa-envelope fa-sm" width={0} />    matthewhansol@gmail.com</motion.h4>
                    <motion.h4 
                        initial={{ y: '30vh', opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ duration: 0.6, type: 'spring', stiffness: 50, delay: 0.7}}
                    ><i className="fab fa-linkedin fa-sm" width={0} /><a href='https://www.linkedin.com/in/mattchang7'>    https://www.linkedin.com/in/mattchang7</a></motion.h4>
                    <motion.h4
                        initial={{ y: '30vh', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, type: 'spring', stiffness: 50, delay: 0.9}}
                    ><i className="fab fa-github fa-sm" width={0} /><a href='https://github.com/mattchang7'>    https://github.com/mattchang7</a></motion.h4>
                </div>
            </div>
        </Layout>
    )
}