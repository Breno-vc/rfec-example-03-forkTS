import { useState } from 'react'

import styles from './addnote.module.css'
import Button from '../Button/Button'
import NoteForm from '../NoteForm/NoteForm'

const AddNote = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleClose(event) {
    if (event.target == event.currentTarget) {
      setIsOpen(false)
    }
  }

  return (
    <div className={styles.wrapper}>
      <Button variant="primary" fullWidth onClick={() => setIsOpen(true)}>
        Add new note
      </Button>
      {isOpen ? <NoteForm onClose={handleClose} /> : null}
    </div>
  )
}

export default AddNote
