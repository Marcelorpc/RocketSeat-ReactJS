import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/105247533?v=4" />
          <div className={styles.authorInfo}>
            <strong>Marcelo Paiva Chaves</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="28 de Janeiro as 11:08h" dateTime="28-01-2024 11:08:30">Publicado ha 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentario!"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}