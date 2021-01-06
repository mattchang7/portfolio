import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Matt Chang</title>
        <link rel='icon' href='/images/logo-icon.ico'/>
      </Head>
      <motion.section 
        // initial={{ x: '10vw', y: '60vw', opacity: 0 }}
        // animate={{ color: '#aa98b6', fontSize: '5vw', opacity: 1, y: 0 }}
        // transition={{ duration: 1.5 }}
      >
        <motion.img 
          src='images/profile-bw.jpg' 
          className={utilStyles.profile} 
          animate={{ y: '5vw' }} 
          transition={{ delay: 0.5 }}
        />
        <motion.h1 
          initial={{ x: '10vw', y: '20vw', fontSize: '6vw', opacity: 0 }}
          animate={{ y: 0, opacity: 1, fontSize: '6vw', color: '#aa98b6' }}
          transition={{ duration: 3.5, type: 'spring', stiffness: 80, delay: 0.5  }}
        >
          Hi, I'm a
        </motion.h1>
        <motion.h1 
          initial={{ x: '10vw', y: '30vw', fontSize: '6vw', opacity: 0 }}
          animate={{ y: '-7vw', opacity: 1, fontSize: '6vw', color: '#aa98b6' }} 
          transition={{ duration: 3.5, delay: 0.6, type: 'spring', stiffness: 80 }}
        >
          web developer
        </motion.h1>
      </motion.section>
    </Layout>
  )
}