import { createPortal } from 'react-dom'
import Title from '../Title/Title'
import styles from './addnoteform.module.css'
import Form from '../Form/Form'
import Button from '../Button/Button'

const AddNoteForm = ({ onClose, onAdd }) => {
  function handleSubmit(event) {
    event.preventDefault()

    const newNote = {
      title: event.target.noteTitle.value,
      content: event.target.noteContent.value
    }

    onAdd(newNote)
    return
  }

  return (
    <>
      {createPortal(
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.container}>
            <Title.H2>Add New Note</Title.H2>
            <Form.Root onSubmit={handleSubmit} id="add-note">
              <Form.Group>
                <Form.Label htmlFor="noteTitle">
                  <Title.H3>Title</Title.H3>
                </Form.Label>
                <Form.Control.Input name="noteTitle" id="noteTitle" required />
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
                />
              </Form.Group>
            </Form.Root>
            <div className={styles.formActions}>
              <Button variant="primary" form="add-note">
                Add note
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

export default AddNoteForm
