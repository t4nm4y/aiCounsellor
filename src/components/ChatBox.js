import React from 'react'
import './ChatBox.css'

const ChatBox = ({content, isAi}) => {
  return (
    <div className={`ChatBox ${isAi? 'isAi' : ''}`}>{content}</div>
  )
}

export default ChatBox