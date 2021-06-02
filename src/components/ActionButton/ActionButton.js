import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addList, addCard } from "../../redux/actions";
import {
  ButtonGroupStyled,
  ButtonStyled,
  FormStyled,
  SubmitButtonStyled,
  CloseForm,
} from "./ActionButton.style";
import TextArea from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

import { request } from "../../utils/Axios";

const actionDispatch = (dispatch) => ({
  addList: (list) => dispatch(addList(list)),
  addCard: (card) => dispatch(addCard(card)),
});

export default function ActionButton(props) {
  const { addList } = actionDispatch(useDispatch());
  const { addCard } = actionDispatch(useDispatch());

  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");
  const { list, listId, boardId } = props;

  const buttonText = !list ? "Add another list" : "Add another card";
  const formPlaceholder = !list ? "Enter list title..." : "Enter card title...";
  const formButton = !list ? "Add list" : "Add card";

  const addNewList = async () => {
    try {
      const list = await request.createList(text, boardId);
      addList(list);
    } catch (err) {
      console.log(err);
    }
  };

  const addNewCard = async () => {
    try {
      const card = await request.createCard(text, listId);
      addCard(card);
    } catch (err) {
      console.log(err);
    }
  };

  const closeForm = (e) => {
    setText("");
    setFormOpen(false);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddList = () => {
    if (text) {
      addNewList();
    }

    return;
  };

  const handleAddCard = () => {
    if (text) {
      addNewCard();
    }
    return;
  };

  return !formOpen ? (
    <ButtonStyled list={list ? 1 : 0} onClick={() => setFormOpen(true)}>
      <FontAwesomeIcon icon={faPlus} />
      &nbsp; &nbsp;
      {buttonText}
    </ButtonStyled>
  ) : (
    <FormStyled list={list ? 1 : 0}>
      <TextArea
        placeholder={formPlaceholder}
        autoFocus
        onBlur={closeForm}
        value={text}
        onChange={handleInputChange}
        minRows={props.list ? 3 : 1}
        style={{
          resize: "none",
          width: "100%",
          outline: "none",
          border: "none",
          overflow: "hidden",
          padding: "10px",
          borderRadius: "5px",
          font: "inherit",
        }}
      />
      <ButtonGroupStyled>
        <SubmitButtonStyled onMouseDown={list ? handleAddCard : handleAddList}>
          {formButton}
        </SubmitButtonStyled>
        <CloseForm onMouseDown={closeForm}>
          <FontAwesomeIcon icon={faTimes} size={"lg"} color={"#6b778c"} />
        </CloseForm>
      </ButtonGroupStyled>
    </FormStyled>
  );
}
