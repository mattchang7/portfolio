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
        <div className={utilStyles.introRow}>
          <div className={utilStyles.textContainer}>
            <motion.div
              variants={lineOneVariants}
            >
              {
                lineOne.map((letter, index) => (
                  <motion.h1 
                    key={index} 
                    className={utilStyles.bigText} 
                    whileHover={{ color: '#f9f7f6', textShadow: '0px 0px 5px #f9f7f6' }} 
                  >
                    {letter}
                  </motion.h1>   
                )             
              )}
            </motion.div>
            <motion.div
              variants={lineTwoVariants}
            >
              {
                lineTwo.map((letter, index) => (
                  <motion.h1
                    key={index}
                    className={utilStyles.bigText}
                    whileHover={{ color: '#f9f7f6', textShadow: '0px 0px 5px #f9f7f6' }}
                  >
                    {letter}
                  </motion.h1>
                  ))
                }
            </motion.div>
            <motion.div
              className={utilStyles.littleText}
              variants={descriptionVariants}
            >
              <p>
                I’m a full stack software engineer. I currently study Computer Science at Fordham,
                but I decided to take a semester off and take a more focused and intense approach this fall by joining an
                immersive bootcamp for Web Development at Full Stack Academy in New York.
              </p>
              <p>
                I zeroed in on Web Development for a few reasons, but primarily, I’ve been interested in technology and design
                for most of my life. To me, good design always makes the world a better place, but with how fast new stacks and
                frameworks are developed on the internet, there is also an emerging problem in a lack of priority towards simple
                and sustainable architecture. I believe that the largest space for effective and exciting design is in the world
                of the internet, and that I’m well suited to implement some solutions.
              </p>
              <p>
                In the future I plan to continue to always keep learning new skills, and to take any opportunity I can get
                to build meaningful technology.
              </p>
            </motion.div>
          </div>
          <div className={utilStyles.space} />
          <motion.img
            src='images/profile-torii.jpg'
            className={utilStyles.profile}
            variants={imageVariants}
            />
        </div>
      </motion.section>
    </Layout>
  )
}

const lineOne = 'I\'m Matt, and I'.split('')
const lineTwo = 'develop software'.split('')

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3.5, staggerChildren: 0.4, delayChildren: 0.5 } }
}

const lineOneVariants = {
  hidden: { y: '30vw' },
  visible: { y: '2vw', transition: { duration: 3.5, type: 'spring', stiffness: 80 } }
}

const lineTwoVariants = {
  hidden: { y: '30vw' },
  visible: { y: 0, transition: { duration: 3.5, type: 'spring', stiffness: 80 } }
}
const imageVariants = {
  hidden: { y: '50vw' },
  visible: { y: '7vw', transition: { duration: 3.5, type: 'spring', stiffness: 80 }}
}

const descriptionVariants = {
  hidden: { y: '30vw'},
  visible: { y: '5vw', transition: { duration: 3.5, type: 'spring', stiffness: 80 }}
}
