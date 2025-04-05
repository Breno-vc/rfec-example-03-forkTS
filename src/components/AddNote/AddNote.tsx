import { useState } from 'react'

import styles from './addnote.module.css'
import Button from '../Button/Button'
import AddNoteForm from '../AddNoteForm/AddNoteForm'
import { v4 as uuid } from 'uuid'
import INotes from '../../types/NotesType'

type AddNoteProps = {
  notes: INotes[]
  setNotes: React.Dispatch<React.SetStateAction<INotes[]>>
}
const AddNote: React.FC<AddNoteProps> = ({ notes, setNotes }) => {
  const [isOpen, setIsOpen] = useState(false)

  function handleClose(
    event: React.FormEvent<HTMLFormElement | HTMLDivElement | HTMLButtonElement>
  ) {
    if (event.target == event.currentTarget) {
      setIsOpen(false)
    }
  }

  function handleAdd(newNote: { title: string; content: string }) {
    // here we have to spread the newNote object, as it has not received uuid yet, and typescript complains if you try to create the property
    // with the common notation of newNote = { ...newNote, uuid: uuid() }, because uuid doesn't exist in the type {title: string, content: string}
    const noteWithUUID = { ...newNote, uuid: uuid() }
    const newNotes = [...notes, noteWithUUID]
    setNotes(newNotes)
    setIsOpen(false)
  }

  return (
    <div className={styles.wrapper}>
      <Button variant="primary" fullWidth onClick={() => setIsOpen(true)}>
        Add new note
      </Button>
      {isOpen ? <AddNoteForm onClose={handleClose} onAdd={handleAdd} /> : null}
    </div>
  )
}

export default AddNote
