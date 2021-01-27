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
                    <motion.h4><i className="fas fa-thumbtack fa-sm"/>    New York, NY</motion.h4>
                    <motion.h4><i className="fas fa-envelope fa-sm"/>    matthewhansol@gmail.com</motion.h4>
                    <motion.h4><i className="fab fa-linkedin fa-sm"/><a href='https://www.linkedin.com/in/mattchang7'>    https://www.linkedin.com/in/mattchang7</a></motion.h4>
                    <motion.h4><i className="fab fa-github fa-sm"/><a href='https://github.com/mattchang7'>    https://github.com/mattchang7</a></motion.h4>
                </div>
            </div>
        </Layout>
    )
}