import React from "react";
import { Body } from "../lib/style/generalStyles";
import Header from "../components/Header/Header";
import ChatApp from "../components/ChatApp/ChatApp";
import { Main } from "../lib/style/generalStyles";

const Home = () => {
  return (
    <Body>
      <Header></Header>
      <Main>
        <ChatApp></ChatApp>
      </Main>
    </Body>
  );
};

export default Home;
