import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/header"

import './global.css'

import styles from "./App.module.css"

function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <Sidebar />
        <div>
          <Post />
          <Post />
        </div>
      </main>
    </div>
  )
}
export default App