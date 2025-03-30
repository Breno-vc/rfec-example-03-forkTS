import { createPortal } from 'react-dom'
import Title from '../Title/Title'
import styles from './editnoteform.module.css'
import Form from '../Form/Form'
import Button from '../Button/Button'

const EditNoteForm = ({ onClose, onEdit, editingNote }) => {
  function handleSubmit(event) {
    event.preventDefault()

    const editedNote = {
      uuid: editingNote.uuid,
      title: event.target.noteTitle.value,
      content: event.target.noteContent.value
    }

    onEdit(editedNote)
    return
  }

  return (
    <>
      {createPortal(
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.container}>
            <Title.H2>Edit Note</Title.H2>
            <Form.Root onSubmit={handleSubmit} id="edit-note">
              <Form.Group>
                <Form.Label htmlFor="noteTitle">
                  <Title.H3>Title</Title.H3>
                </Form.Label>
                <Form.Control.Input
                  name="noteTitle"
                  id="noteTitle"
                  required
                  defaultValue={editingNote.title}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="noteContent">
                  <Title.H3>Content</Title.H3>
                </Form.Label>
                <Form.Control.TextArea
                  disableResize
                  rows="5"
                  name="noteContent"
                  id="noteContent"
                  required
                  defaultValue={editingNote.content}
                />
              </Form.Group>
            </Form.Root>
            <div className={styles.formActions}>
              <Button variant="primary" form="edit-note">
                Salvar
              </Button>
              <Button variant="secondary" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default EditNoteForm
