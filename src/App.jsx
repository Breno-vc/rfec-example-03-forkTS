import Container from './components/Container/Container'
import Title from './components/Title/Title'
import AddNote from './components/AddNote/AddNote'

const App = () => {
  return (
    <Container>
      <Title.H1>Notes App</Title.H1>
      <AddNote />
    </Container>
  )
}

export default App
