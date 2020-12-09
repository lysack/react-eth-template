import styled from "styled-components";

export const StyledTitle = styled.h1`
  display: flex; 
  align-items: center; 
  justify-content: space-evenly; 
  font-size: calc(12px + 2vmin);
`
export const BigEmoji = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-evenly; 
  font-size: calc(120px + 10vmin);
`
export const StyledNote = styled.h4`
  display: flex; 
  align-items: center; 
  justify-content: space-evenly; 
  font-size: calc(3px + 1vmin);
`

export const Header = styled.header`
  background-color: #01bf2b;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  border-style: solid;
  border-width: 5px;
  border-color: #eff9fb;
`;

export const Body = styled.body`
  align-items: center;
  background-color: #f04554;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: calc(100vh - 70px);
`;

export const Image = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #61dafb;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  color: #282c34;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  margin: 0px 20px;
  padding: 12px 24px;

  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }
`;
