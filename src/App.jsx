import { Post } from "./Post"
import { Header } from "./components/header"
import './styles.css'

function App() {
  return (
    <div>
      <Header />

      <Post
        author="Marcelo Paiva Chaves"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolor fugiat optio adipisci error, dignissimos quidem at ad officiis ratione officia et odit reiciendis autem facere iste facilis tempora commodi?"
      />
      <Post
        author="Marcelo Paiva Chaves"
        content="Segundo Post"
      />
    </div>
  )
}
export default App