import { createPortal } from 'react-dom'
import Title from '../Title/Title'
import styles from './addnoteform.module.css'
import Form from '../Form/Form'
import Button from '../Button/Button'

type AddNoteFormProps = {
  onClose: (
    event: React.FormEvent<HTMLFormElement | HTMLDivElement | HTMLButtonElement>
  ) => void
  onAdd: (newNote: { title: string; content: string }) => void
}
const AddNoteForm: React.FC<AddNoteFormProps> = ({ onClose, onAdd }) => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const title = (form.elements.namedItem('noteTitle') as HTMLInputElement)
      .value
    const content = (form.elements.namedItem('noteContent') as HTMLInputElement)
      .value
    const newNote = {
      title,
      content
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
