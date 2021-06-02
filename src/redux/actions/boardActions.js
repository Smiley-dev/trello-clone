import { CONSTANTS } from "../actions";

export const setActiveBoard = (board) => {
  return {
    type: CONSTANTS.SET_ACTIVE_BOARD,
    payload: board,
  };
};

export const getBoards = (boards) => {
  return {
    type: CONSTANTS.GET_BOARDS,
    payload: boards,
  };
};

export const addBoard = (payload) => {
  return {
    type: CONSTANTS.ADD_BOARD,
    payload,
  };
};

export const updateBoard = (boardId, title) => {
  console.log(boardId, title);
  return {
    type: CONSTANTS.EDIT_BOARD,
    payload: { boardId, title },
  };
};

export const deleteBoard = (boardId) => {
  return {
    type: CONSTANTS.DELETE_BOARD,
    payload: boardId,
  };
};
