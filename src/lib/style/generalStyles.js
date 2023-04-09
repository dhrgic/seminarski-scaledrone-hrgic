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
  padding: 12px;
  border: 0.5px solid rgba(25, 10, 43, 0.979);
  box-shadow: 0 10px 20px 5px rgb(17, 12, 34),
    inset 0px 0px 8px 0px rgba(26, 11, 41, 0.986);
  display: flex;
  gap: 8px;
`;

export const MessagingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  box-sizing: border-box;
  height: 15%;
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 0.5px solid rgba(175, 167, 245, 0.226);
  box-shadow: inset 0px 0px 5px 0px rgba(245, 245, 245, 0.342);
  background-color: rgb(50, 35, 100);
  display: flex;
  gap: 12px;
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
