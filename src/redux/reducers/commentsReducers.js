import { CONSTANTS } from "../actions";

const initialState = {
  lists: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_COMMENTS:
      return {
        ...state,
        cards: action.payload,
      };

    case CONSTANTS.ADD_COMMENT:
      const cards = state.cards;
      cards.push(action.payload);
      return { ...state, cards };

    case CONSTANTS.EDIT_COMMENT: {
      const { title, cardId } = action.payload;
      const cards = state.cards;
      const cardIndex = cards.findIndex((card) => card.id === cardId);
      cards[cardIndex].name = title;
      return { ...state, cards };
    }

    case CONSTANTS.DELETE_COMMENT:
      return;
    default:
      return state;
  }
};

export default commentsReducer;
