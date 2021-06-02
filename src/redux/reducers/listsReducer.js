import { CONSTANTS } from "../actions";

const initialState = {
  lists: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const lists = state.lists;
      lists.push(action.payload);
      return { ...state, lists };

    case CONSTANTS.GET_LISTS: {
      return { lists: action.payload };
    }

    case CONSTANTS.EDIT_LIST_TITLE: {
      const { id, title } = action.payload;
      const lists = state.lists;
      const listIndex = lists.findIndex((list) => list.id === id);
      lists[listIndex].name = title;
      return { ...state, lists };
    }

    case CONSTANTS.DELETE_LIST: {
      const listId = action.payload;
      const lists = state.lists.filter((list) => list.id !== listId);
      return { ...state, lists };
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type,
      } = action.payload;
      const newState = { ...state };

      if (type === "list") {
        const list = newState.lists.splice(droppableIndexStart, 1);
        newState.lists.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      /*       //In the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.lists.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      //In different list
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.lists.find(
          (list) => droppableIdStart === list.id,
        );
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = state.find((list) => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      } */

      return newState;

    default:
      return state;
  }
};

export default listReducer;
