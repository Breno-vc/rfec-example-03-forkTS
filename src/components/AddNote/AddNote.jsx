import { useState } from 'react'

import styles from './addnote.module.css'
import Button from '../Button/Button'
import NoteForm from '../NoteForm/NoteForm'
import useLocalStorage from '../../hooks/useLocalStorage'
import { v4 as uuid } from 'uuid'

const AddNote = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [notes, setNotes] = useLocalStorage('notes', [])

  function handleClose(event) {
    if (event.target == event.currentTarget) {
      setIsOpen(false)
    }
  }

  function handleAdd(newNote) {
    newNote.uuid = uuid()
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
    setIsOpen(false)
  }

  return (
    <div className={styles.wrapper}>
      <Button variant="primary" fullWidth onClick={() => setIsOpen(true)}>
        Add new note
      </Button>
      {isOpen ? <NoteForm onClose={handleClose} onAdd={handleAdd} /> : null}
    </div>
  )
}

export default AddNote
