import styled from "styled-components";

export const BoardContainer = styled.div`
  background-color: #0079bf;
  width: 100%;
  min-height: calc(100% - 80px);
  padding-top: 10px;
  display: inline-flex;
  overflow-x: auto;
  overflow-y: auto;
  white-space: nowrap;
`;

export const BoardHeader = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: #0079bf;
  width: 100%;
`;

export const BoardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

export const UpdateBoardForm = styled.input`
  border-radius: 10px;
  border: none;
  font-size: 20px;
  width: fit-content;
  padding: 0px 20px;
  margin-left: 20px;
  outline: none;
`;

export const DeleteBoard = styled.button`
  background-color: #eb5a46;
  color: white;
  border-radius: 10px;
  width: 200px;
  opacity: 0.7;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
