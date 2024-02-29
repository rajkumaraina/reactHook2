import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [comment, setComment] = useState([])
  const formSubmit = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setComment(prevState => [...prevState, newComment])
    setName('')
    setCommentText('')
  }
  const commentTextChange = event => setCommentText(event.target.value)
  const nameChange = event => setName(event.target.value)
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={formSubmit}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={nameChange}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={commentTextChange}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {comment.map(each => (
          <CommentItem key={each.id} commentDetails={each} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
