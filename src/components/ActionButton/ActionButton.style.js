import styled from "styled-components";

export const ButtonStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  height: 36px;
  width: 100%;
  max-width: 272px;
  padding-left: 10px;
  font-size: 15px;
  opacity: ${(props) => (!props.list ? 1 : 0.5)};
  color: ${(props) => (!props.list ? "white" : "inherit")};
  background-color: ${(props) =>
    !props.list ? "rgba(0, 0, 0, 0.15)" : "inherit"};
  margin-left: ${(props) => (!props.list ? "10px" : "0px")};
  min-width: ${(props) => (!props.list ? "272px" : "0px")};
  &:hover {
    opacity: 0.7;
  }
`;

export const FormStyled = styled.div`
  background-color: #ebecf0;
  height: fit-content;
  width: ${(props) => (!props.list ? "272px" : "")};
  margin-left: ${(props) => (!props.list ? "10px" : "")};
  padding: ${(props) => (!props.list ? "10px" : "")};
  border-radius: ${(props) => (!props.list ? "5px" : "")};
  min-width: ${(props) => (!props.list ? "272px" : "0px")};
`;

export const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

export const SubmitButtonStyled = styled.button`
  background-color: #5aac44;
  color: white;
  border: none;
  margin-top: 5px;
  margin-right: 20px;
  text-align: center;
  width: 70px;
  height: 30px;
  border-radius: 5px;
`;

export const CloseForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  &:hover {
    cursor: pointer;
  }
`;
