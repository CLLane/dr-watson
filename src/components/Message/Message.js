import React from 'react';
import './Message.css';

const Message = ({ message, isUser }) => {
  console.log('component message', message)
  console.log('component isUser', isUser)
  return (
    <section className={isUser ? 'message' : 'message watson'}>
      <p>{message.message}</p>
    </section>
  )
}


export default Message;