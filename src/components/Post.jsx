import styles from "./Post.module.css"

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useState } from "react"

export function Post({author, content, publishedAt}) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const [comments, setComments] = useState([
    'bacana'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment() {
    event.preventDefault()
    
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange () {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type == 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          } else if(line.type == 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Deixe um comentario!">
        </textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={content} content={comment} />
        })}
      </div> 
    </article>
  )
}