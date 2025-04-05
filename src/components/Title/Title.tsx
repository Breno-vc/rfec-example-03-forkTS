import styles from './title.module.css'
import { ReactNode } from 'react'

type TitleProps = {
  children: ReactNode
}
const H1 = ({ children }: TitleProps) => {
  return <h1 className={styles.h1}>{children}</h1>
}

const H2 = ({ children }: TitleProps) => {
  return <h2 className={styles.h2}>{children}</h2>
}

const H3 = ({ children }: TitleProps) => {
  return <h3 className={styles.h3}>{children}</h3>
}

const Title = {
  H1,
  H2,
  H3
}

export default Title
