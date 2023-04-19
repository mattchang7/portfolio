/* eslint-disable react/react-in-jsx-scope */
import { getProjectData, getAllProjectTitles } from "../../lib/projects";
import utilStyles from "../../styles/utils.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.project);
  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectTitles();
  return {
    paths,
    fallback: false,
  };
}

const Project = ({ projectData: props }) => {
  return (
    <div className={utilStyles.projectContainer}>
      <motion.span
        className={utilStyles.projectHeaderImage}
        initial={{ opacity: 1, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Link href={props.link}>
          <motion.img
            src={`../${props.image}`}
            className={utilStyles.projectHeaderImage}
            whilehover={{ scale: 1.01 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
        </Link>
      </motion.span>
      <motion.div
        className={utilStyles.projectInfo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <h5>{props.role}</h5>
        <h5>{props.date}</h5>
      </motion.div>
      <motion.div
        dangerouslySetInnerHTML={{ __html: props.contentHtml }}
        className={utilStyles.projectDescription}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
    </div>
  );
};

export default Project;
