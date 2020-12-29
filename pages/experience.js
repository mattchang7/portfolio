/* eslint-disable jsx-quotes */
/* eslint-disable react/no-danger */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedExperiencesData } from '../lib/experience'
import { Chrono } from 'react-chrono'

export async function getStaticProps() {
  const allExperiencesData = await getSortedExperiencesData()
  return {
    props: {
        allExperiencesData
    }
  }
}

export default function Experience({ allExperiencesData }) {
    const items = allExperiencesData.map(({ startDate, name }) => ({ title: startDate, cardTitle: name }))
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Experience</title>
                </Head>
                <h1>Experience</h1>
            </div>
            <div className={utilStyles.timeLine}>
                <Chrono
                    items={items}
                    mode='VERTICAL_ALTERNATING'
                    theme={{primary: "white", secondary: "violet", cardBgColor: "#987668", cardForeColor: "violet" }}
                >
                    {allExperiencesData.map(({ id, startDate, endDate, role, contentHtml }) => (
                        <div key={id}>
                            <h6>{role}</h6>
                            <h6>{startDate} to {endDate}</h6>
                            <br />
                            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                        </div>
                    ))}
                </Chrono>
            </div>
        </Layout>
    )
}