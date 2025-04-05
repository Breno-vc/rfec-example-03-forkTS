import Container from './components/Container/Container'
import Title from './components/Title/Title'
import AddNote from './components/AddNote/AddNote'
import Notes from './components/Notes/Notes'
import useLocalStorage from './hooks/useLocalStorage'

const App = () => {
  const [notes, setNotes] = useLocalStorage('notes', [])

  return (
    <Container>
      <Title.H1>Notes App</Title.H1>
      <AddNote notes={notes} setNotes={setNotes} />
      <Notes notes={notes} setNotes={setNotes} />
    </Container>
  )
}

export default App
