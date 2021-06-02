import { CONSTANTS } from "../actions";

export const addList = (list) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: list,
  };
};

export const getLists = (lists) => {
  return {
    type: CONSTANTS.GET_LISTS,
    payload: lists,
  };
};

export const updateList = (id, title) => {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    payload: { id, title },
  };
};

export const deleteList = (id) => {
  return {
    type: CONSTANTS.DELETE_LIST,
    payload: id,
  };
};

export const getCardsInList = (cards) => {
  return {
    type: CONSTANTS.GET_CARDS_IN_LIST,
    payload: cards,
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type,
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type,
    },
  };
};
