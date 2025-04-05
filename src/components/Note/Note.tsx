import Title from '../Title/Title'
import Button from '../Button/Button'
import styles from './note.module.css'
import EditNote from '../EditNote/EditNote'
import INotes from '../../types/NotesType'

type NoteProps = {
  uuid: string
  title: string
  content: string
  onDelete: (uuid: string) => void
  notes: INotes[]
  setNotes: React.Dispatch<React.SetStateAction<INotes[]>>
}

const Note: React.FC<NoteProps> = ({
  uuid,
  title,
  content,
  onDelete,
  notes,
  setNotes
}) => {
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
