/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { motion } from "framer-motion";
import { RiDownloadLine } from "react-icons/ri";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/images/logo-icon.ico" />
      </Head>
      <motion.section
        className={utilStyles.homePage}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={utilStyles.introRow}>
          <div className={utilStyles.textContainer}>
            <motion.div variants={lineOneVariants}>
              {lineOne.map((letter, index) => (
                <motion.h1
                  key={index}
                  className={utilStyles.bigText}
                  whilehover={{
                    color: "#f9f7f6",
                    textShadow: "0px 0px 5px #f9f7f6",
                  }}
                >
                  {letter}
                </motion.h1>
              ))}
            </motion.div>
            <motion.div
              className={utilStyles.littleText}
              variants={descriptionVariants}
            >
              <p>
                My name is Matthew Chang. I'm a full stack software engineer
                based in New York, NY. I'm passionate about writing precise and
                reliable code and simple, user-friendly UIs. I currently work on
                a cloud computing PaaS at IBM.
              </p>
            </motion.div>
            <motion.div
              className={utilStyles.resumeButton}
              variants={resumeVariants}
            >
              <button
                className={utilStyles.button59}
                role="button"
                onClick={() => {
                  const link = document.createElement("a");
                  link.download = "matt-chang-resume.pdf";
                  link.href = "/resume.pdf";
                  link.click();
                }}
              >
                Resume
                <RiDownloadLine style={{ marginLeft: "30px" }} />
              </button>
            </motion.div>
          </div>
          <div className={utilStyles.space} />
          <motion.img
            src="images/profile.jpg"
            className={utilStyles.profile}
            variants={imageVariants}
          />
        </div>
      </motion.section>
    </Layout>
  );
}

const lineOne = "Welcome.".split("");

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2.5, staggerChildren: 0.4, delayChildren: 0.5 },
  },
};

const lineOneVariants = {
  hidden: { y: "80vh" },
  visible: {
    y: "2vw",
    transition: { duration: 3.5, type: "spring", stiffness: 80 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    y: "8vh",
    transition: {
      duration: 1,
      ease: [0, 0.71, 0.2, 1.25],
    },
  },
};

const descriptionVariants = {
  hidden: { y: "60vh" },
  visible: {
    y: "5vw",
    transition: { duration: 3.5, type: "spring", stiffness: 80 },
  },
};
const resumeVariants = {
  hidden: { y: "60vh" },
  visible: {
    y: "5vw",
    transition: { duration: 3.5, type: "spring", stiffness: 80 },
  },
};
