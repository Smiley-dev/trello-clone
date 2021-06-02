import styled from "styled-components";
import TextArea from "react-textarea-autosize";

export const Overlay = styled.div`
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

export const CardContainer = styled.div`
  position: relative;
  width: 500px;
  min-width: 250px;
  margin: 0 20px;
  height: 700px;
  max-height: 90vh;
  background-color: #f4f5f7;
  padding: 20px 20px 20px 30px;
  border-radius: 20px;
  color: #172b4d;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  font-size: 20px;
`;

export const CardClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50% 50%;
  font-size: 25px;
  &:hover {
    cursor: pointer;
    background-color: #bdbec2;
  }
`;

export const DescriptionTitle = styled.div`
  margin: 20px 0;
  font-weight: bold;
`;

export const Description = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const DescriptionInput = styled(TextArea)`
  margin-top: 0px;
  width: 70%;
  min-width: 200px;
  resize: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 15px;
  padding: 10px;
  background-color: inherit;
  border: none;
  &:focus {
    background-color: white;
  }
`;

export const SaveDescButton = styled.button`
  background-color: #5aac44;
  display: block;
  color: white;
  border: none;
  margin-top: 20px;
  margin-right: 20px;
  text-align: center;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background-color: #a4bd9d;
    cursor: not-allowed;
  }
`;

export const CommentInput = styled(TextArea)`
  width: 70%;
  min-width: 200px;

  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
  font-family: inherit;
  border-radius: 3px;
  border: 1px solid grey;
  outline: none;
  padding: 5px 5px;
  resize: none;
`;

export const User = styled.p`
  display: inline-block;
  font-weight: bold;
  margin-top: 20px;
`;

export const CommentContainer = styled.div`
  background-color: white;
  margin-top: 20px;
  width: fit-content;
  padding: 5px;
`;

export const CardTitle = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const TitleForm = styled(TextArea)`
  margin-top: 0px;
  width: 70%;
  min-width: 200px;
  resize: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 15px;
  padding: 10px;
  background-color: inherit;
  border: none;
  &:focus {
    background-color: white;
  }
`;

export const Comment = styled.div``;

export const DeleteCardButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #eb5a46;
  display: block;
  color: white;
  border: none;
  margin-top: 5px;
  margin-right: 20px;
  text-align: center;
  width: 90px;
  height: 50px;
  border-radius: 5px;
  opacity: 0.7;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
