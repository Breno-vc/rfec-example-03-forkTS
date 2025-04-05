import Note from '../Note/Note'
import styles from './notes.module.css'
import INotes from '../../types/NotesType'

type NotesProps = {
  notes: INotes[]
  // this setNotes typing notation means basically that setNotes is a function that accepts an array of INotes
  // The React.Dispatch means that it can either accept a new value to replace or a function with the previous value
  setNotes: React.Dispatch<React.SetStateAction<INotes[]>>
}

// When using React.FC<generics> typing, there's no need to type the children
// e.g. const Notes = ({children}: T) === const Notes: React.FC<T> = ({children})...
const Notes: React.FC<NotesProps> = ({ notes, setNotes }) => {
  function handleDeleteNote(uuid: string) {
    const filteredNotes = notes.filter((note) => note.uuid !== uuid)
    setNotes(filteredNotes)
  }

  return (
    <div className={styles.container}>
      {notes.length ? (
        notes.map((note) => {
          return (
            <Note
              key={note.uuid}
              {...note}
              onDelete={handleDeleteNote}
              notes={notes}
              setNotes={setNotes}
            />
          )
        })
      ) : (
        <p className={styles.empty}>Nenhuma nota cadastrada</p>
      )}
    </div>
  )
}

export default Notes
