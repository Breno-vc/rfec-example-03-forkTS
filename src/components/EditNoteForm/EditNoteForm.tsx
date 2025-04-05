import { createPortal } from 'react-dom'
import Title from '../Title/Title'
import styles from './editnoteform.module.css'
import Form from '../Form/Form'
import Button from '../Button/Button'

type EditNoteFormProps = {
  onClose: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void
  onEdit: (editedNote: { uuid: string; title: string; content: string }) => void
  editingNote: { uuid: string; title: string; content: string } | undefined
}
const EditNoteForm: React.FC<EditNoteFormProps> = ({
  onClose,
  onEdit,
  editingNote
}) => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    /*At this function we have our first "complex" problem, we have this event element that receive it's 
    native properties from HTMLFormElement, all right, but how can we say to TS that this eventElement
    have properties such as noteTitle and noteContent? 
    basically we need to do something called "Type Casting" to tell TS that this eventElement is a custom HTMLFormElement */
    event.preventDefault()

    const form = event.target as HTMLFormElement
    // here we are extracting the value of noteTitle and assigning it to a variable called title, we can see that we're
    // basically telling TS that the type of form.elements.namedItem('noteTitle') is HTMLInputElement
    const title = (form.elements.namedItem('noteTitle') as HTMLInputElement)
      .value
    const content = (form.elements.namedItem('noteContent') as HTMLInputElement)
      .value
    if (editingNote) {
      const editedNote = {
        uuid: editingNote.uuid,
        title,
        content
      }

      onEdit(editedNote)
    }
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
                  defaultValue={editingNote?.title}
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
                  defaultValue={editingNote?.content}
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
