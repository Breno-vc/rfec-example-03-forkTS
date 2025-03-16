import Title from '../Title/Title'
import Button from '../Button/Button'
import styles from './note.module.css'

const Note = ({ uuid, title, content, onEdit, onDelete }) => {
  return (
    <div className={styles.note}>
      <Title.H3>{title}</Title.H3>
      <p>{content}</p>
      <div className={styles.actions}>
        <Button variant="edit" onClick={() => onEdit(uuid)}>
          Edit
        </Button>
        <Button variant="delete" onClick={() => onDelete(uuid)}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default Note
