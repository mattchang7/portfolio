/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedExperiencesData } from "../lib/experience";
import { motion } from "framer-motion";

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
        <motion.div
          className={utilStyles.timeLine}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
        >
          <ul>
            {allExperiencesData.map(
              ({ name, image, startDate, endDate, role, contentHtml }) => (
                <motion.li>
                  <div key={name} className={utilStyles.timeLineContent}>
                    <h6 className={utilStyles.timeLineDate}>
                      {startDate} to {endDate}
                    </h6>
                    <img className={utilStyles.experienceLogo} src={image} />
                    <h5>{role}</h5>
                    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                  </div>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>
      </div>
    </Layout>
  );
}
