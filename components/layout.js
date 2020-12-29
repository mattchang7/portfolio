import styles from '../styles/layout.module.css'
import Link from 'next/link'

export default function Layout({ children, home }) {
  return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <Link href='/'>
                     <a className={styles.logo}><img src='images/logo-svg.svg'/></a>
                </Link>
                <div className={styles.navLinksBox}>
                    <Link href='/portfolio'>
                        <a className={styles.navLinks} title='Portfolio'>Portfolio</a>
                    </Link>
                    <Link href='/experience'>
                        <a className={styles.navLinks} title='Experience'>Experience</a>
                    </Link>
                    <Link href='/contact'>
                        <a className={styles.navLinks} title='Contact'>Contact</a>
                    </Link>
                </div>
            </div>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}