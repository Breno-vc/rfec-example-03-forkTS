import { createPortal } from 'react-dom'
import Title from '../Title/Title'
import styles from './noteform.module.css'
import Form from '../Form/Form'

const NoteForm = ({ onClose }) => {
  return (
    <>
      {createPortal(
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.container}>
            <Title.H2>Add New Note</Title.H2>
            <Form.Root>
              <Form.Group>
                <Form.Label htmlFor="title">
                  <Title.H3>Title</Title.H3>
                </Form.Label>
                <Form.Control.Input name="title" id="title" />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="content">
                  <Title.H3>Content</Title.H3>
                </Form.Label>
                <Form.Control.TextArea
                  disableResize
                  rows="5"
                  name="content"
                  id="title"
                />
              </Form.Group>
            </Form.Root>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default NoteForm
