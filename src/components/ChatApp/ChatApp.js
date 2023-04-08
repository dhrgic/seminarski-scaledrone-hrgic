import React from 'react'
import { ChatAppWrapper } from '../../lib/style/generalStyles'
import Users from './Users/Users'
import Messages from './Messages/Messages'

const ChatApp = () => {
  return (
    <main>
        <ChatAppWrapper>
            <Users></Users>
            <Messages></Messages>
        </ChatAppWrapper>
    </main>
  )
}

export default ChatApp