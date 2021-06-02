import { combineReducers } from "redux";
import listReducer from "./listsReducer";
import boardsReducer from "./boardsReducer";
import cardsReducer from "./cardsReducer";
import activeBoardReducer from "./activeBoardReducer";
import commentsReducer from "./commentsReducers";

export default combineReducers({
  lists: listReducer,
  boards: boardsReducer,
  cards: cardsReducer,
  activeBoard: activeBoardReducer,
  comments: commentsReducer,
});
