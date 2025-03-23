import Title from '../Title/Title'
import Button from '../Button/Button'
import styles from './note.module.css'
import EditNote from '../EditNote/EditNote'

const Note = ({ uuid, title, content, onDelete, notes, setNotes }) => {
  return (
    <div className={styles.note}>
      <Title.H3>{title}</Title.H3>
      <p>{content}</p>
      <div className={styles.actions}>
        <EditNote notes={notes} setNotes={setNotes} uuid={uuid} />
        <Button variant="delete" onClick={() => onDelete(uuid)}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default Note
