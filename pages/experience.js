/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedExperiencesData } from "../lib/experience";
import { motion } from "framer-motion";
import TimelineItem from "../components/timelineItem";

export async function getStaticProps() {
  const allExperiencesData = await getSortedExperiencesData();
  return {
    props: {
      allExperiencesData,
    },
  };
}

export default function Experience({ allExperiencesData }) {
  return (
    <Layout>
      <Head>
        <title>Experience</title>
      </Head>
      <div className={utilStyles.experienceContainer}>
        <motion.ul className={utilStyles.timelineList}>
          {allExperiencesData.map(
            ({ name, image, startDate, endDate, role, contentHtml }, index) => (
              <motion.li
                className={utilStyles.timelineItem}
                initial={{ y: "40vh", opacity: 0 }}
                animate={{ y: 100, opacity: 1 }}
                exit={{ y: "-40vh", opacity: 0 }}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  stiffness: 70,
                  delay: index / 3,
                }}
              >
                <div key={name} className={utilStyles.timelineContent}>
                  <h6 className={utilStyles.timelineDate}>
                    {startDate} to {endDate}
                  </h6>
                  <img className={utilStyles.experienceLogo} src={image} />
                  <h5 className={utilStyles.timelineRole}>{role}</h5>
                  <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </div>
              </motion.li>
            )
          )}
        </motion.ul>
      </div>
    </Layout>
  );
}
