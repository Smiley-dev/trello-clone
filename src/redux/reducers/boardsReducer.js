import { CONSTANTS } from "../actions";

const initialState = { boards: [] };

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_BOARDS:
      return { ...state, boards: action.payload };

    case CONSTANTS.ADD_BOARD: {
      const boards = state.boards;
      boards.push(action.payload);
      return { ...state, boards };
    }

    case CONSTANTS.EDIT_BOARD: {
      const { boardId, title } = action.payload;
      const boards = state.boards;
      const boardIndex = boards.findIndex((board) => board.id === boardId);
      boards[boardIndex].name = title;
      return { ...state, boards };
    }

    case CONSTANTS.DELETE_BOARD: {
      const boardId = action.payload;
      const boards = state.boards.filter((board) => board.id !== boardId);
      return { ...state, boards };
    }

    default:
      return state;
  }
};

export default boardsReducer;
