import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedProjectsData } from '../lib/projects'

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
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
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <ul className={utilStyles.list}>
                {allProjectsData.map(({ id, date, title, role }) => (
                    <li className={utilStyles.listItem} key={id}>
                    {title}
                    <br />
                    {date}
                    <br />
                    {role}
                    </li>
                ))}
                </ul>
            </section>
        </Layout>
    )
}