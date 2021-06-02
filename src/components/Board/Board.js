/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import List from "../List/List";
import {
  BoardContainer,
  BoardHeader,
  BoardTitle,
  DeleteBoard,
  UpdateBoardForm,
} from "./Board.style";

import { useSelector, useDispatch } from "react-redux";
import ActionButton from "../ActionButton/ActionButton";
import { Droppable } from "react-beautiful-dnd";
import {
  getLists,
  getCards,
  updateBoard,
  deleteBoard,
} from "../../redux/actions";
import { request } from "../../utils/Axios";

const actionDispatch = (dispatch) => ({
  getLists: (lists) => dispatch(getLists(lists)),
  getCards: (cards) => dispatch(getCards(cards)),
  updateBoard: (boardId, title) => dispatch(updateBoard(boardId, title)),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
});

export default function Board(props) {
  const { getCards } = actionDispatch(useDispatch());
  const cards = useSelector((state) => state.cards);
  const lists = useSelector((state) => state.lists);
  const [loading, setLoading] = useState(true);
  const boardId = props.location.state.boardId;
  const boardName = props.location.state.boardName;
  const [updateFormValue, setUpdateFormValue] = useState(boardName);

  const [boardTitleFormOpened, setBoardTitleFormOpened] = useState(false);

  const { getLists } = actionDispatch(useDispatch());
  const { updateBoard } = actionDispatch(useDispatch());
  const { deleteBoard } = actionDispatch(useDispatch());

  const fetchLists = async () => {
    try {
      const lists = await request.fetchLists(boardId);
      getLists(lists);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCards = async () => {
    try {
      const cards = await request.fetchCards(boardId);
      getCards(cards);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    updateBoard(boardId, e.target.value);
    setBoardTitleFormOpened(false);
    request.updateBoard(boardId, updateFormValue);
  };

  const handleFormValueChange = (e) => {
    if (e.target.value !== "") setUpdateFormValue(e.target.value);
  };

  const history = useHistory();
  const deleteBoardHandler = async () => {
    deleteBoard(boardId);
    await request.deleteBoard(boardId);
    history.push("/");
  };

  useEffect(() => {
    fetchCards();
    fetchLists();
    setLoading(false);
  }, [boardId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BoardHeader>
        {boardTitleFormOpened ? (
          <UpdateBoardForm
            value={updateFormValue}
            onBlur={handleSubmit}
            onChange={handleFormValueChange}
            autoFocus
          ></UpdateBoardForm>
        ) : (
          <BoardTitle onClick={() => setBoardTitleFormOpened(true)}>
            {updateFormValue}
          </BoardTitle>
        )}

        <DeleteBoard onClick={deleteBoardHandler}>Delete Board</DeleteBoard>
      </BoardHeader>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <BoardContainer {...provided.droppableProps} ref={provided.innerRef}>
            {lists.lists.map((list, index) => (
              <List
                key={list.id}
                listId={list.id}
                title={list.name}
                index={index}
                cards={cards}
              ></List>
            ))}
            {provided.placeholder}
            <ActionButton boardId={boardId}></ActionButton>
          </BoardContainer>
        )}
      </Droppable>
    </>
  );
}
