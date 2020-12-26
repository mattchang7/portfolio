import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Contact() {
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Contact</title>
                    <link rel='icon' href='/public/logo.ico'/>
                </Head>
                <h1>Contact</h1>
            </div>
        </Layout>
    )
}