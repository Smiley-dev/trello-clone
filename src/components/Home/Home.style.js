import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

export const BoardsContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  flex-flow: row wrap;
`;
export const Board = styled(Link)`
  display: flex;
  color: white;
  font-size: 15px;
  font-weight: 700;
  padding: 10px;
  min-width: 200px;
  height: 100px;
  background-color: #0081cc;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const NewBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  color: black;
  font-size: 15px;
  font-weight: 400;
  min-width: 200px;
  height: 100px;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const CreateNewBoard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardForm = styled.div`
  background-color: #ebecf0;
  width: 500px;
  max-width: 80vw;
  border-radius: 5px;
  padding: 20px 20px;
`;

export const BoardTitle = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 3px;
  padding-left: 10px;
  font-size: 20px;
`;

export const SubmitBoardButton = styled.button`
  background-color: #5aac44;
  color: white;
  border: none;

  margin-right: 20px;
  text-align: center;
  width: 100px;
  height: 30px;
  border-radius: 5px;
`;
