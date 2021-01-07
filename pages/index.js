/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Matt Chang</title>
        <link rel='icon' href='/images/logo-icon.ico' />
      </Head>
      <motion.section 
        className={utilStyles.homePage}
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          variants={lineOneVariants}
          >
          {
            lineOne.map((letter, index) => (
              <motion.h1 key={index} className={utilStyles.bigText} whileHover={{ color: '#f9f7f6', textShadow: '0px 0px 5px #f9f7f6' }} >{letter}</motion.h1>
              ))
            }
        </motion.div>
        <motion.div
          variants={lineTwoVariants}
        >
          {
            lineTwo.map((letter, index) => (
              <motion.h1 key={index} className={utilStyles.bigText} whileHover={{ color: '#f9f7f6', textShadow: '0px 0px 5px #f9f7f6' }} >{letter}</motion.h1>
              ))
            }
        </motion.div>
        <div className={utilStyles.space} />
        <motion.img
          src='images/profile-torii.jpg'
          className={utilStyles.profile}
          variants={imageVariants}
          />
      </motion.section>
    </Layout>
  )
}

const lineOne = 'Hi, I\'m Matt, and'.split('')
const lineTwo = 'I develop software.'.split('')

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3.5, staggerChildren: 0.4, delayChildren: 0.5 } }
}

const lineOneVariants = {
  hidden: { y: '30vw' },
  visible: { y: '3.5vw', transition: { duration: 3.5, type: 'spring', stiffness: 80 } }
}

const lineTwoVariants = {
  hidden: { y: '30vw' },
  visible: { y: 0, transition: { duration: 3.5, type: 'spring', stiffness: 80 } }
}

const imageVariants = {
  hidden: { y: '30vw' },
  visible: { y: 0, transition: { duration: 3.5, type: 'spring', stiffness: 80 }}
}