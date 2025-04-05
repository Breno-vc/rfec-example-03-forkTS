import styles from './button.module.css'

// This is the first time that we're using this new Syntax of React.ButtonHTMLAttributes<T> & <A>
// TypeScript will try to find an intersection between the type HTMLButtonElement and the type A
// soo, we're not defining the generic functions at the ButtonProps itself, as onClick or onClose
// but, if we haven't defiend the intersection, TS would supose that this ButtonProps type would
// have all the necessary properties of the element.
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  variant: 'primary' | 'secondary' | 'delete' | 'edit'
  fullWidth?: boolean
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  fullWidth,
  ...props
}) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant]}${
        fullWidth ? ' ' + styles.fullWidth : ''
      }`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
