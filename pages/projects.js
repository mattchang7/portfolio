/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedProjectsData } from "../lib/projects";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export async function getStaticProps() {
  const allProjectsData = await getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Projects({ allProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <div className={utilStyles.projectLinkContainer}>
        {allProjectsData.map((project, index) => (
          <motion.span
            key={project.id}
            className={utilStyles.thumbnailFrame}
            initial={{ y: "40vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-40vh", opacity: 0 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 70,
              delay: index / 3,
            }}
          >
            <Link href={`/portfolio/${project.title}`}>
              <motion.img
                className={utilStyles.thumbnailImage}
                src={project.image}
                whilehover={{ scale: 1.05 }}
                transition={transition}
              />
            </Link>
          </motion.span>
        ))}
      </div>
    </Layout>
  );
}
