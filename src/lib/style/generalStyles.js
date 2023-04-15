import styled from "styled-components";
import { colors, device } from "./theme";

export const Body = styled.div`
  background-color: ${colors.bodyBck};
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
`;

export const ChatAppWrapper = styled.div`
  box-sizing: border-box;
  background-color: ${colors.appContainerBck};
  height: 91vh;
  width: 100vw;
  margin: 0 auto;
  border-radius: 5px;
  margin-top: 10px;
  padding: 4px;
  border: 0.5px solid 4px rgb(7, 19, 33);
  box-shadow: 0 0px 10px 4px rgb(7, 19, 33),
    inset 0px 0px 8px 2px rgba(21, 20, 40, 0.986);
  display: flex;
  gap: 4px;

  @media screen and (min-width: ${device.desktop}) {
    width: 65vw;
    padding: 8px;
    gap: 8px;
  }
`;

export const MessagingWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: ${device.tablet}) {
    padding: 8px;
  }

  @media screen and (min-width: ${device.desktop}) {
    gap: 8px;
  }
`;

export const MessagesWrapper = styled.div`
  box-sizing: border-box;
  height: 80%;
  padding: 4px;
  border-radius: 5px;
  border: 0.5px solid rgba(175, 167, 245, 0.226);
  box-shadow: inset 0px 0px 5px 0px rgba(245, 245, 245, 0.342);
  background-color: ${colors.wrapperBck};
  display: flex;

  @media screen and (min-width: ${device.tablet}) {
    padding: 12px;
  }
`;

export const MessagesContainer = styled.div`
  box-sizing: border-box;
  background-color: ${colors.containerBck};
  padding: 8px;
  border-radius: 5px;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0px 0px 20px 20px rgba(26, 11, 41, 0.986);
  position: relative;

  @media screen and (min-width: ${device.tablet}) {
    padding: 24px;
  }
`;

export const EmptyContainerMessage = styled.p`
  display: block;
  align-self: center;
  color: rgba(212, 209, 181, 0.6);
  margin: auto 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  text-shadow: 0 0 5px rgba(130, 191, 196, 0.533);

  @media screen and (min-width: ${device.tablet}) {
    font-size: 32px;
    line-height: 4;
  }
`;

export const ActiveUser = styled.p`
  color: rgba(212, 209, 181, 0.6);
  font-size: 12px;
  text-shadow: 0 0 2px rgba(130, 191, 196, 0.533);
  height: 3%;
  text-align: center;
  padding: 2px 0;

  @media screen and (min-width: ${device.mobileSmall}) {
    padding: 8px 0;
    height: 4%;
    font-size: 14px;
  }

  @media screen and (min-width: ${device.desktop}) {
    font-size: 18px;
  }
`;

export const Main = styled.main``;
