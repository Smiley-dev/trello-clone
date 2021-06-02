import React, { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import {
  ListElement,
  ListTitle,
  UpdateListForm,
  DeleteIcon,
} from "./List.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";
import ActionButton from "../ActionButton/ActionButton";
import { updateList, deleteList } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { request } from "../../utils/Axios";

const actionDispatch = (dispatch) => ({
  updateList: (listId, title) => dispatch(updateList(listId, title)),
  deleteList: (listId) => dispatch(deleteList(listId)),
});

export default function List({ title, listId, index, cards }) {
  const [listFormOpened, setListFormOpened] = useState(false);
  const [listFormValue, setListFormValue] = useState("");

  const { updateList } = actionDispatch(useDispatch());
  const { deleteList } = actionDispatch(useDispatch());

  const handleSubmit = () => {
    setListFormOpened(false);
    if (listFormValue !== "") {
      updateList(listId, listFormValue);
      request.updateList(listId, listFormValue);
    }
  };

  const handleFormValueChange = (e) => {
    setListFormValue(e.target.value);
  };

  const handleDeleteList = () => {
    request.deleteList(listId);
    deleteList(listId);
  };

  return (
    <Draggable draggableId={String(listId)} index={index}>
      {(provided) => (
        <ListElement
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listId)}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {listFormOpened ? (
                  <UpdateListForm
                    value={title}
                    onBlur={handleSubmit}
                    onChange={handleFormValueChange}
                    autoFocus
                  ></UpdateListForm>
                ) : (
                  <ListTitle onClick={() => setListFormOpened(true)}>
                    {title}
                  </ListTitle>
                )}
                <DeleteIcon onClick={handleDeleteList}>
                  <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </DeleteIcon>

                {cards.cards.map(
                  (card, index) =>
                    card.idList === listId && (
                      <Card
                        key={card.id}
                        index={index}
                        name={card.name}
                        id={card.id}
                        shortLink={card.shortLink}
                        desc={card.desc}
                      ></Card>
                    ),
                )}
                {provided.placeholder}
                <ActionButton list listId={listId}></ActionButton>
              </div>
            )}
          </Droppable>
        </ListElement>
      )}
    </Draggable>
  );
}
