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
      <section className={utilStyles.homePage}>
        <div className={utilStyles.introRow}>
          <div className={utilStyles.textContainer}>
            <motion.div
              key="welcome-text"
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: "0vh", opacity: 1 }}
              exit={{ y: "-30vh", opacity: 0 }}
              transition={{ type: "spring", duration: 1 }}
            >
              {lineOne.map((letter, index) => (
                <motion.h1 key={index} className={utilStyles.bigText}>
                  {letter}
                </motion.h1>
              ))}
            </motion.div>
            <motion.div
              className={utilStyles.littleText}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: "0vh", opacity: 1 }}
              exit={{ y: "-30vh", opacity: 0 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.25,
              }}
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
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: "0vh", opacity: 1 }}
              exit={{ y: "-30vh", opacity: 0 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.5,
              }}
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
          <motion.div
            className={utilStyles.space}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "5vh", opacity: 1 }}
            exit={{ y: "-30vh", opacity: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 0.75,
            }}
          >
            <img src="images/profile.jpg" className={utilStyles.profile} />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

const lineOne = "Welcome.".split("");
