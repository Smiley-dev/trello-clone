import { CONSTANTS } from "../actions";

const initialState = { cards: [] };

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_CARDS:
      return {
        ...state,
        cards: action.payload,
      };

    case CONSTANTS.ADD_CARD:
      const cards = state.cards;
      cards.push(action.payload);
      return { ...state, cards };

    case CONSTANTS.EDIT_CARD_NAME: {
      const { title, cardId } = action.payload;
      const cards = state.cards;
      const cardIndex = cards.findIndex((card) => card.id === cardId);
      cards[cardIndex].name = title;
      return { ...state, cards };
    }
    case CONSTANTS.EDIT_CARD_DESC: {
      const { desc, cardId } = action.payload;
      const cards = state.cards;
      const cardIndex = cards.findIndex((card) => card.id === cardId);
      cards[cardIndex].desc = desc;
      return { ...state, cards };
    }

    case CONSTANTS.DELETE_CARD: {
      const cardId = action.payload;
      const cards = state.cards.filter((card) => card.id !== cardId);
      return { ...state, cards };
    }

    default:
      return state;
  }
};

export default cardsReducer;
