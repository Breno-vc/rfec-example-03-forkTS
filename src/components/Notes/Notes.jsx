import Note from '../Note/Note'
import styles from './notes.module.css'

const Notes = ({ notes, setNotes }) => {
  return (
    <div className={styles.container}>
      {notes.length ? (
        notes.map((note) => {
          return (
            <Note
              key={note.uuid}
              {...note}
              onEdit={() => {}}
              onDelete={() => {}}
            />
          )
        })
      ) : (
        <p>Nenhuma nota cadastrada</p>
      )}
    </div>
  )
}

export default Notes
