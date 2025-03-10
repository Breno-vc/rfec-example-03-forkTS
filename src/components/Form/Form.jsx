import styles from './Form.module.css'

const Root = (props) => {
  return (
    <form {...props} className={styles.form}>
      {props.children}
    </form>
  )
}

const Group = ({ children }) => {
  return <div className={styles.group}>{children}</div>
}

const Label = (props) => {
  return <label {...props}>{props.children}</label>
}

const Input = (props) => {
  return <input {...props} className={styles.control} type="text" />
}

const TextArea = ({ disableResize, ...props }) => {
  return (
    <textarea
      {...props}
      className={
        styles.control + `${disableResize ? ' ' + styles.disableResize : ''}`
      }
    />
  )
}

const Control = {
  Input,
  TextArea
}

const Form = {
  Root,
  Group,
  Label,
  Control
}

export default Form
