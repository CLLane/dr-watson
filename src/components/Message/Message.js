import React from 'react';
import './Message.css';

const Message = ({ message, isUser }) => {
  console.log('message', message)
  console.log('isUser', isUser)
  return (
    <section className={isUser ? 'message' : 'message watson'}>
      <p>{message}</p>
    </section>
  )
}

export default Message;