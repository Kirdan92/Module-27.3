import React from 'react';
import Comment from './CommentContainer';
import './CommentContainer.css';

const CommentsList = ({comments}) => <ul className="comments-container">{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;