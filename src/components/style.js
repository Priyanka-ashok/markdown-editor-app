import styled from "styled-components";
import media from "./theme";

export const Header = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 3.75em;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  background-color: #3386ff;
`;

export const Main = styled.div`
  margin-top: 3.75em;
`;

export const Title = styled.h1`
  padding: 0 1.25em;
  color: white;
  font-family: ${props => props.theme.fontFamily};
  ${media.tablet`
  font-size : 1.875em;
  `}
  ${media.mobile`
      font-size: 1.25em;
   `}
`;

export const Editor = styled.div`
  height: 100vh;
  & #editor {
    width: 100%;
    height: 100%;
    padding: 0 0 0 10px;
    font-size: 0.937em;
    border: none;
    font-family: ${props => props.theme.fontFamily};
  }
`;

export const Previewer = styled.div`
  & #preview {
    height: 100vh;
    padding: 0 0 0 30px;
    overflow-y: auto;
    font-family: ${props => props.theme.fontFamily};
  }
  background-color: ${props => props.theme.light};
  color: ${props => props.theme.color};
`;

export const MarkdownContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
`;
