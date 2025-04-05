import { useState } from 'react'
import Button from '../Button/Button'
import EditNoteForm from '../EditNoteForm/EditNoteForm'
import INotes from '../../types/NotesType'

type EditNoteProps = {
  notes: INotes[]
  setNotes: React.Dispatch<React.SetStateAction<INotes[]>>
  uuid: string
}

const EditNote: React.FC<EditNoteProps> = ({ notes, setNotes, uuid }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [editingNote, setEditingNote] = useState<INotes | undefined>(undefined)

  function handleClose(event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) {
    if (event.target == event.currentTarget) {
      setIsOpen(false)
    }
  }

  function handleEdit(editedNote: INotes) {
    const filteredNotes = notes.filter((note) => note.uuid !== uuid)
    const newNotes = [...filteredNotes, editedNote]
    setNotes(newNotes)
    setIsOpen(false)
  }

  function handleClick() {
    const editingNote = notes.find((note) => note.uuid === uuid)
    setEditingNote(editingNote)
    setIsOpen(true)
  }

  return (
    <>
      <Button variant="edit" onClick={handleClick}>
        Edit
      </Button>
      {isOpen ? (
        <EditNoteForm
          onClose={handleClose}
          onEdit={handleEdit}
          editingNote={editingNote}
        />
      ) : null}
    </>
  )
}

export default EditNote
