import styles from './Form.module.css'
import { TextAreaProps, GenericProps, GroupProps } from './Form.Types'

const Root = (props: GenericProps) => {
  return (
    <form {...props} className={styles.form}>
      {props.children}
    </form>
  )
}

const Group: React.FC<GroupProps> = ({ children }) => {
  return <div className={styles.group}>{children}</div>
}

const Label = (props: GenericProps) => {
  return <label {...props}>{props.children}</label>
}

const Input = (props: GenericProps) => {
  return <input {...props} className={styles.control} type="text" />
}

const TextArea = ({ disableResize, ...props }: TextAreaProps) => {
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
