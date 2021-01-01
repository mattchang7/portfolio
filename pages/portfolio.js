/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedProjectsData } from '../lib/projects'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export async function getStaticProps() {
  const allProjectsData = await getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}

export default function Portfolio({ allProjectsData }) {
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Portfolio</title>
                </Head>
                <h1>Portfolio</h1>
            </div>
            <div className={utilStyles.carousel}>
            {
                allProjectsData.map(project => (
                    <Slider key={project.id} fade={true}>
                        <div>
                            <img src={project.image} />
                        </div>
                        <div className={utilStyles.projectContent}>
                            <h3>{project.role}</h3>
                            <h4>{project.date}</h4>
                            <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
                        </div>
                    </Slider>
                ))
            }
            </div>
            {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <ul className={utilStyles.list}>
                {allProjectsData.map(({ id, date, title, role, image, mobileImage, contentHtml }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <img 
                            srcSet={`${mobileImage} 1000w, ${image} 2000w`}
                            sizes="(max-width: 1100px) 1000px, 2000px"
                            src={image}
                        />
                        <br />
                        {date}
                        <br />
                        {role}
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    </li>
                ))}
                </ul>
            </section> */}
        </Layout>
    )
}