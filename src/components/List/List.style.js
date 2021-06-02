import styled from "styled-components";

export const ListElement = styled.div`
  position: relative;
  display: inline-block;
  width: 272px;
  min-width: 272px;
  height: 90%;
  margin-left: 10px;
  background-color: #ebecf0;
  border-radius: 5px;
  color: #172b4d;
  padding: 15px;
  &:hover {
    cursor: unset;
  }
`;

export const ListHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListTitle = styled.div`
  width: 100%;
  padding-left: 5px;
  padding-bottom: 5px;
  font-weight: 500;
  margin: 10px 0;
  &:hover {
    cursor: pointer;
  }
`;

export const UpdateListForm = styled.input`
  border-radius: 5px;
  height: 30px;
  border: none;
  font-size: 15px;
  width: fit-content;
  padding: 0px 10px;
  margin-bottom: 15px;
  outline: none;
`;

export const DeleteIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    cursor: pointer;
  }
`;
