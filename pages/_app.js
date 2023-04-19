/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import "../styles/global.css";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["projects", "experience", "contact"];

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence initial={false} wait>
      <div className={styles.container}>
        <motion.div
          className={styles.navBar}
          variants={navBarVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.logoLinkBox}>
            <Link
              href="/"
              className={styles.logo}
              variants={logoVariants}
              whilehover="hover"
            >
              <img src="images/logo-svg.svg" />
            </Link>
          </div>
          <div className={styles.navLinksBox}>
            {navLinks.map((navLink, index) => (
              <Link
                href={`/${navLink}`}
                key={index}
                className={styles.navLinkLetters}
              >
                <motion.div
                  className={
                    router.pathname === `/${navLink}`
                      ? `${styles.navLinks} ${styles.selected}`
                      : `${styles.navLinks}`
                  }
                  variants={navLinksVariants}
                  whilehover="hover"
                >
                  <h5 className={styles.navLinkLetters}>{navLink}</h5>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
        <Component {...pageProps} />
      </div>
    </AnimatePresence>
  );
}

const navBarVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

const logoVariants = {
  hidden: { x: "-8vw" },
  visible: {
    x: 0,
    transition: { duration: 1, delay: 0.5, type: "spring", stiffness: 120 },
  },
  hover: { scale: 1.1, rotate: [360, 0], transition: { duration: 0.2 } },
};

const navLinksVariants = {
  hidden: { x: "20vw" },
  visible: { x: 0, transition: { duration: 1, type: "spring", stiffness: 70 } },
  hover: { scale: 1.1 },
};
