/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { motion } from "framer-motion";
import { MdOutlineLocationCity } from "react-icons/md";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Contact() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Contact</title>
          <link rel="icon" href="/public/images/logo-icon.ico" />
        </Head>
        <div className={utilStyles.contactContainer}>
          <motion.h4
            initial={{ y: "30vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-30vh", opacity: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 50,
              delay: 0.3,
            }}
          >
            <MdOutlineLocationCity /> New York, NY
          </motion.h4>
          <motion.h4
            initial={{ y: "30vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-30vh", opacity: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 50,
              delay: 0.5,
            }}
          >
            <AiOutlineMail /> matthewhansol@gmail.com
          </motion.h4>
          <motion.h4
            initial={{ y: "30vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-30vh", opacity: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 50,
              delay: 0.7,
            }}
          >
            <AiFillLinkedin />
            <a href="https://www.linkedin.com/in/mattchang7">
              {" "}
              https://www.linkedin.com/in/mattchang7
            </a>
          </motion.h4>
          <motion.h4
            initial={{ y: "30vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-30vh", opacity: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 50,
              delay: 0.9,
            }}
          >
            <AiFillGithub />
            <a href="https://github.com/mattchang7">
              {" "}
              https://github.com/mattchang7
            </a>
          </motion.h4>
        </div>
      </div>
    </Layout>
  );
}
