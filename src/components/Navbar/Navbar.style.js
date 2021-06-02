import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavbarStyled = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  height: 40px;
  background-color: #026aa7;
  padding: 4px;
  display: flex;
  align-items: center;
  z-index: 99;
`;

export const LeftNavSection = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 80%;
  justify-content: flex-start;
`;

export const RightNavSection = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 80%;
  justify-content: flex-end;
  font-size: 30px;
  color: white;
`;

export const HomeLink = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  color: white;
  background-color: hsla(0, 0%, 100%, 0.3);
  border-radius: 5px;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: hsla(0, 0%, 100%, 0.2);
  }
`;

export const BoardsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  font-size: 15px;
  font-weight: 700;
  background-color: hsla(0, 0%, 100%, 0.3);
  border-radius: 5px;
  border: none;
  text-decoration: none;
  margin-left: 10px;
  color: white;
  padding: 0 10px;
  &:hover {
    cursor: pointer;
    background-color: hsla(0, 0%, 100%, 0.2);
  }
  &:active {
    outline: none;
    border: none;
  }
  &:focus {
    outline: 0;
  }
`;

export const Logo = styled(Link)`
  font-size: 25px;
  font-weight: 700;
  text-decoration: none;
  color: white;
  opacity: 0.5;
  margin: auto 20px;
  &:hover {
    opacity: 0.8;
  }
`;
