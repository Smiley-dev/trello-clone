import React, { useState } from "react";
import {
  Overlay,
  CardContainer,
  CardHeader,
  CardClose,
  CardTitle,
  DescriptionInput,
  DescriptionTitle,
  SaveDescButton,
  TitleForm,
  DeleteCardButton,
} from "./CardDeatils.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import {
  updateCardDesc,
  updateCardName,
  deleteCard,
} from "../../redux/actions";
import { request } from "../../utils/Axios";
import { useDispatch } from "react-redux";

const actionDispatch = (dispatch) => ({
  updateCardDesc: (desc, id) => dispatch(updateCardDesc(desc, id)),
  updateCardName: (title, cardId) => dispatch(updateCardName(title, cardId)),
  deleteCard: (id) => dispatch(deleteCard(id)),
});

export default function CardDetails(props) {
  const history = useHistory();
  const desc = props.location.state.desc;
  const name = props.location.state.name;
  const id = props.location.state.id;
  const { updateCardDesc } = actionDispatch(useDispatch());
  const { updateCardName } = actionDispatch(useDispatch());
  const { deleteCard } = actionDispatch(useDispatch());

  const [descForm, setDescForm] = useState(desc);

  const [isDescFormOpen, setIsDescFormOpen] = useState(false);
  const [isTitleFormOpen, setIsTitleFormOpen] = useState(false);
  const [cardNameInput, setCardNameInput] = useState(name);

  const closeCard = () => {
    history.goBack();
  };

  const handleSetFormChange = (e) => {
    setDescForm(e.target.value);
  };

  const handleCardNameInput = (e) => {
    setCardNameInput(e.target.value);
  };

  const updateCardDescApi = () => {
    request.upadateCardDesc(descForm, id);
    updateCardDesc(descForm, id);
    setIsDescFormOpen(false);
  };

  const updateCardNameApi = () => {
    request.updateCardName(cardNameInput, id);
    updateCardName(cardNameInput, id);
  };

  const handleDeleteCard = async () => {
    await request.deleteCard(id);
    deleteCard(id);
    closeCard();
  };

  return (
    <Overlay>
      <CardContainer>
        <CardHeader>
          {!isTitleFormOpen ? (
            <CardTitle onClick={() => setIsTitleFormOpen(true)}>
              {cardNameInput}
            </CardTitle>
          ) : (
            <TitleForm
              value={cardNameInput}
              onChange={handleCardNameInput}
              autoFocus
              onBlur={() => {
                updateCardNameApi();
                setIsTitleFormOpen(false);
              }}
            ></TitleForm>
          )}

          <CardClose onClick={closeCard}>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </CardClose>
        </CardHeader>
        <DescriptionTitle>Description</DescriptionTitle>

        {!isDescFormOpen ? (
          <>
            <div>{descForm}</div>
            <SaveDescButton onClick={() => setIsDescFormOpen(true)}>
              Edit
            </SaveDescButton>
          </>
        ) : (
          <>
            <DescriptionInput
              value={descForm}
              minRows={3}
              autoFocus
              onChange={handleSetFormChange}
              placeholder="Add description"
              onBlur={updateCardDescApi}
            ></DescriptionInput>
            <SaveDescButton onClick={updateCardDescApi}>Save</SaveDescButton>
          </>
        )}

        <DeleteCardButton onClick={handleDeleteCard}>
          Delete Card
        </DeleteCardButton>
      </CardContainer>
    </Overlay>
  );
}
