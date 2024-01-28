import styles from "./Sidebar.module.css"

export function Sidebar() {
  return (
    <aside className={styles.Sidebar}>
      <img 
        className={styles.cover} 
        src="https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />
   
      <div className={styles.profile}>
        <strong>Marcelo Paiva</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#site">Editar seu perfil</a>
      </footer>
    </aside>
  )
}