import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DropdownContainer = styled.div`
  position: fixed;
  left: ${(props) => (props.hidden ? 0 : -310)};
  top: 40px;
  width: 300px;
  background-color: white;
  z-index: 2;
  border: 1px solid #ebecef;
  border-radius: 10px;
  margin: 5px;
  padding-bottom: 50px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 2px;
  border: 1px solid rgb(182, 181, 181);
  box-shadow: none;
  padding-left: 10px;
  outline: none;
`;

export const BoardsLabel = styled.div`
  color: #6f7c91;
  padding-left: 20px;
  margin-top: 20px;
`;

export const Board = styled(Link)`
  width: 90%;
  height: 40px;
  margin: auto;
  display: flex;
  padding-left: 10px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  border: none;
  background-color: #e0eff7;
  color: #172b4d;
  font-weight: 500;
  margin-top: 10px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const CloseSearch = styled(FontAwesomeIcon)`
  margin-left: 10px;
  color: gray;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
