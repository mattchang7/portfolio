import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Contact() {
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Contact</title>
                    <link rel='icon' href='/public/logo.ico'/>
                </Head>
                <div className={utilStyles.contactContainer}>
                    <h3><i className="fas fa-thumbtack"/>    New York, NY</h3>
                    <h4><i className="fas fa-envelope"/>    matthewhansol@gmail.com</h4>
                    <h4><i className="fab fa-linkedin"/><a href='https://www.linkedin.com/in/mattchang7'>    https://www.linkedin.com/in/mattchang7</a></h4>
                    <h4><i className="fab fa-github"/><a href='https://github.com/mattchang7'>    https://github.com/mattchang7</a></h4>
                </div>
            </div>
        </Layout>
    )
}