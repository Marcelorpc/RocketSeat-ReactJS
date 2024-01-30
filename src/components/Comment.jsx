import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
      <div className={styles.comment}>
        <img src='https://avatars.githubusercontent.com/u/105247533?v=4' />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Marcelo Paiva Chaves</strong>

                <time title="28 de Janeiro as 11:08h" dateTime="28-01-2024 11:08:30">Publicado ha 30min</time>
              </div>

              <button title='Deletar comentario'>
                <Trash size={24} />
              </button>
            </header>

            <p>Muito bom, excelente!</p>
          </div>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
  )
}