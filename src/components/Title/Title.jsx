import styles from './title.module.css'

const H1 = ({ children }) => {
  return <h1 className={styles.h1}>{children}</h1>
}

const H2 = ({ children }) => {
  return <h2 className={styles.h2}>{children}</h2>
}

const H3 = ({ children }) => {
  return <h3 className={styles.h3}>{children}</h3>
}

const Title = {
  H1,
  H2,
  H3
}

export default Title
