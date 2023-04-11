import React from 'react'
import { Body } from '../lib/style/generalStyles'
import Header from '../components/Header/Header'
import ChatApp from '../components/ChatApp/ChatApp'


const Home = () => {
  return (
    <Body>
    <Header></Header>
    <ChatApp></ChatApp>
    </Body>
  )
}

export default Home