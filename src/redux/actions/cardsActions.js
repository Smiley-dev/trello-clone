import { CONSTANTS } from "../actions";

export const addCard = (card) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: card,
  };
};

export const getCards = (cards) => {
  return {
    type: CONSTANTS.GET_CARDS,
    payload: cards,
  };
};

export const updateCardName = (title, cardId) => {
  return {
    type: CONSTANTS.EDIT_CARD_NAME,
    payload: { title, cardId },
  };
};

export const updateCardDesc = (desc, cardId) => {
  return {
    type: CONSTANTS.EDIT_CARD_DESC,
    payload: { desc, cardId },
  };
};

export const deleteCard = (id) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: id,
  };
};
