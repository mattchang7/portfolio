import styles from '../styles/layout.module.css'
import Link from 'next/link'

export default function Layout({ children, home }) {
  return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <Link href='/'>
                     <img src='images/logo-svg.svg'/>
                </Link>
                <div className={styles.navLinks}>
                    <Link href='/portfolio'>
                        <a>Portfolio</a>
                    </Link>
                    <Link href='/experience'>
                        <a>Experience</a>
                    </Link>
                    <Link href='/contact'>
                        <a>Contact</a>
                    </Link>
                </div>
            </div>
            {children}
        </div>
    )
}

// import styles from '../styles/layout.module.css'

// export default function Layout({ children }) {
//     return (
//         <div className={styles.container}>
//             <div className='nav-bar'>
//                 <Link href='/'>
//                     <img href=''
//                 </Link>
//                 <Link href='/portfolio'>
//                     <a>Portfolio</a>
//                 </Link>
//                 <Link href='/experience'>
//                     <a>Experience</a>
//                 </Link>
//                 <Link href='/contact'>
//                     <a>Contact</a>
//                 </Link>
//             </div>
//             {children}
//         </div>
//     )
// }