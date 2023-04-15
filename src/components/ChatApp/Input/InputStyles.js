import styled from "styled-components";
import { colors, device } from "../../../lib/style/theme";

export const InputWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 12%;
  padding: 4px;
  border-radius: 5px;
  border: 0.5px solid rgba(175, 167, 245, 0.226);
  box-shadow: inset 0px 0px 5px 0px rgba(245, 245, 245, 0.342);
  background-color: ${colors.wrapperBck};
  display: flex;
  gap: 4px;

  @media screen and (min-width: ${device.tablet}) {
    gap: 12px;
    height: 15%;
    padding: 12px;
  }
`;

export const MessagesInput = styled.textarea`
  width: 85%;
  background-color: ${colors.containerBck};
  box-shadow: inset 0px 0px 20px 20px rgba(26, 11, 41, 0.986);
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 24px;
  color: antiquewhite;
  font-size: 14px;
  resize: none;
  font-family: Arial, Helvetica, sans-serif;

  @media screen and (min-width: ${device.tablet}) {
    font-size: 20px;
  }
`;

export const InputButton = styled.button`
  width: 15%;
  border-radius: 5px;
  background-color: ${colors.wrapperBck};
  box-shadow: inset 0px 0px 10px 2px rgba(245, 245, 245, 0.342);
  border: none;
  color: rgba(212, 209, 181, 0.9);
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;

  &:hover {
    background-color: antiquewhite;
    box-shadow: inset 0px 0px 10px 2px rgba(37, 31, 68, 0.6);
    color: ${colors.wrapperBck};
  }

  @media screen and (min-width: ${device.tablet}) {
    font-size: 24px;
  }
`;
