import { useRouter } from 'next/router'
import { getProjectData, getAllProjectTitles } from '../../lib/projects'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.project)
    return {
      props: {
        projectData
      }
    }
}

export async function getStaticPaths() {
    const paths = getAllProjectTitles()
    return {
      paths,
      fallback: false
    }
}

const Project = ({ projectData: props }) => {
  return (
      <div className={utilStyles.projectContainer}>
          <span className={utilStyles.projectHeaderImage}>
            <img src={`../${props.image}`} className={utilStyles.projectHeaderImage} />
          </span>
          <div className={utilStyles.projectInfo}>
            <h5>{props.role}</h5>
            <h5>{props.date}</h5>
          </div>
          <div dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
      </div>
  )
}

export default Project