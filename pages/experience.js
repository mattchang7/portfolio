/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedExperiencesData } from '../lib/experience'

export async function getStaticProps() {
  const allExperiencesData = await getSortedExperiencesData()
  return {
    props: {
        allExperiencesData
    }
  }
}

export default function Experience({ allExperiencesData }) {
    return (
        <Layout>
            <Head>
                <title>Experience</title>
            </Head>
            <div className={utilStyles.experienceContainer}>
                <div className={utilStyles.timeLine}>
                    <ul>
                        {
                            allExperiencesData.map(({ name, image, startDate, endDate, role, contentHtml }) => (
                                <li>
                                    <div key={name} className={utilStyles.timeLineContent} >
                                        <h6 className={utilStyles.timeLineDate}>{startDate} to {endDate}</h6>
                                        <img className={utilStyles.experienceLogo} src={image}/>
                                        <h5>{role}</h5>
                                        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Layout>
    )
}