import styles from './Form.module.css'

const Root = (props) => {
  return (
    <form {...props} className={styles.form}>
      {props.children}
    </form>
  )
}

const Input = (props) => {
  return <input {...props} className={styles.formControl} type="text" />
}

const TextArea = (props) => {
  return (
    <textarea
      {...props}
      className={
        styles.formControl +
        `${props.disableResize ? ' ' + styles.disableResize : ''}`
      }
    />
  )
}

const FormControl = {
  Input,
  TextArea
}

const Form = {
  Root,
  FormControl
}

export default Form

/**
 * Proxima call vamos trocar esse componente por um de Form que centraliza tudo por la.
 * Vamos trocar o nome da branch com o rename.
 * Form.Root
 * Form.Group
 * Form.Label
 * Form.Control.Input
 * Form.Control.TextArea
 * Form.ErrorMessage
 */
