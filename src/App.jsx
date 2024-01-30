import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/header"

import './global.css'

import styles from "./App.module.css"

// author: {avatar_url: "", name: "", role: ""}
//publishedAt: Date
// content: ""

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/105247533?v=4",
      name: "Marcelo Paiva",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '<a href="">jane.design/doctorcare</a>'},
    ],
    publishedAt: new Date('2024-01-30 16:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/105247533?v=4",
      name: "Marcelo Paiva",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '<a href="">jane.design/doctorcare</a>'},
    ],
    publishedAt: new Date('2024-01-30 17:00:00')
  },
]

function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <Sidebar />
        <div>
          {posts.map(post => {
            return (<Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </div>
      </main>
    </div>
  )
}
export default App