import styled from "styled-components";

export const InputWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 15%;
  padding: 12px;
  border-radius: 5px;
  border: 0.5px solid rgba(175, 167, 245, 0.226);
  box-shadow: inset 0px 0px 5px 0px rgba(245, 245, 245, 0.342);
  background-color: rgb(50, 35, 100);
  display: flex;
  gap: 12px;
`;

export const MessagesInput = styled.textarea`
  width: 85%;
  background-color: rgb(30, 21, 61);
  box-shadow: inset 0px 0px 20px 20px rgba(26, 11, 41, 0.986);
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 24px;
  color: antiquewhite;
  font-size: 20px;
  resize: none;
  font-family: Arial, Helvetica, sans-serif;
`;

export const InputButton = styled.button`
  width: 15%;
  border-radius: 5px;
  background-color: rgb(50, 35, 100);
  box-shadow: inset 0px 0px 10px 2px rgba(245, 245, 245, 0.342);
  border: none;
  color: rgba(212, 209, 181, 0.9);
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
`;
