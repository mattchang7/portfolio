import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Matt Chang</title>
        <link rel='icon' href='/images/logo-icon.ico'/>
      </Head>
      <section>
        <img src='images/profile-bw.jpg' className={utilStyles.profile} />
        <p>Hi, I'm a web developer</p>
      </section>
    </Layout>
  )
}