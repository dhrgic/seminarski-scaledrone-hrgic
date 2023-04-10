import styled from "styled-components";

export const Body = styled.div`
  background-color: rgb(36, 37, 85);
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
`;

export const ChatAppWrapper = styled.div`
  box-sizing: border-box;
  background-color: rgb(30, 21, 61);
  height: 85vh;
  width: 65vw;
  margin: 0 auto;
  border-radius: 5px;
  margin-top: 10px;
  padding: 8px;
  border: 0.5px solid rgba(25, 10, 43, 0.979);
  box-shadow: 0 10px 20px 5px rgb(17, 12, 34),
    inset 0px 0px 8px 0px rgba(26, 11, 41, 0.986);
  display: flex;
  gap: 8px;
`;

export const UsersWrapper = styled.div`
  box-sizing: border-box;
  width: 25%;
  padding: 12px;
  border-radius: 5px;
  border: 0.5px solid rgba(175, 167, 245, 0.226);
  box-shadow: inset 0px 0px 5px 0px rgba(245, 245, 245, 0.342);
  background-color: rgb(50, 35, 100);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MessagingWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80%;
`;

export const MessagesWrapper = styled.div`
  height: 90%;
  padding: 12px;
  border-radius: 5px;
  border: 0.5px solid rgba(175, 167, 245, 0.226);
  box-shadow: inset 0px 0px 5px 0px rgba(245, 245, 245, 0.342);
  background-color: rgb(50, 35, 100);
  display: flex;
`;

export const MessagesContainer = styled.div`
  background-color: rgb(30, 21, 61);
  padding: 24px;
  border-radius: 5px;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex;
  box-shadow: inset 0px 0px 20px 20px rgba(26, 11, 41, 0.986);
  position: relative;
`;
