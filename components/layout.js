/* eslint-disable react/react-in-jsx-scope */
import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
  return (
        <div className={styles.container}>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}