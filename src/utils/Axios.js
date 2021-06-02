import axios from "axios";
require("dotenv").config();

class Axios {
  constructor() {
    this.url = process.env.REACT_APP_BASE_URL;
    this.key = process.env.REACT_APP_API_KEY;
    this.token = process.env.REACT_APP_SERVER_TOKEN;
  }

  //BOARD
  fetchBoards = async () => {
    try {
      const response = await axios.get(
        `${this.url}/1/organizations/jsnemanjag/boards?lists=all&filter=open&key=${this.key}&token=${this.token}`,
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response);
    }
  };

  getSingleBoard = async (boardId) => {
    try {
      const response = await axios.get(
        `${this.url}/1/boards/${boardId}?&key=${this.key}&token=${this.token}`,
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  };

  createBoard = async (boardName) => {
    try {
      const response = await axios.post(
        `${this.url}/1/boards/?defaultLists=false&name=${boardName}&key=${this.key}&token=${this.token}`,
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  };

  updateBoard = async (boardId, boardName) => {
    try {
      const response = await axios.put(
        `${this.url}/1/boards/${boardId}?name=${boardName}&key=${this.key}&token=${this.token}`,
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  };

  deleteBoard = async (boardId) => {
    try {
      return await axios.delete(
        `${this.url}/1/boards/${boardId}?key=${this.key}&token=${this.token}`,
      );
    } catch (error) {
      throw new Error(error.response.data);
    }
  };

  //LISTS

  fetchLists = async (boardId) => {
    try {
      const response = await axios.get(
        `${this.url}/1/boards/${boardId}/lists?key=${this.key}&token=${this.token}`,
      );

      return response.data;
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  getSingleList = async (listId) => {
    try {
      const response = await axios.get(
        `${this.url}/1/lists/${listId}/?key=${this.key}&token=${this.token}`,
      );
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  createList = async (listName, boardId) => {
    try {
      const response = await axios.post(
        `${this.url}/1/lists?pos=bottom&name=${listName}&idBoard=${boardId}&key=${this.key}&token=${this.token}`,
      );

      return response.data;
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  updateList = async (listId, listName) => {
    try {
      return await axios.put(
        `${this.url}/1/lists/${listId}?name=${listName}&key=${this.key}&token=${this.token}`,
      );
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  updateListPosition = async () => {};

  deleteList = async (listId) => {
    try {
      return await axios.put(
        `${this.url}/1/lists/${listId}/closed?value=true&key=${this.key}&token=${this.token}`,
      );
    } catch (error) {
      throw new Error(error.response.data);
    }
  };

  //CARDS

  fetchCards = async (boardId) => {
    try {
      const response = await axios.get(
        `${this.url}/1/boards/${boardId}/cards?key=${this.key}&token=${this.token}`,
      );

      return response.data;
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  fetchCardsInList = async (listId) => {
    try {
      const response = await axios.get(
        `${this.url}/1/lists/${listId}/cards?key=${this.key}&token=${this.token}`,
      );

      return response.data;
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  getSingleCard = async (cardId) => {
    try {
      const response = await axios.get(
        `${this.url}/1/cards/${cardId}?key=${this.key}&token=${this.token}`,
      );
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  createCard = async (cardName, listId) => {
    try {
      const response = await axios.post(
        `${this.url}/1/cards?idList=${listId}&name=${cardName}&key=${this.key}&token=${this.token}`,
      );

      return response.data;
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  updateCardName = async (cardName, cardId) => {
    try {
      return await axios.put(
        `${this.url}/1/cards/${cardId}?name=${cardName}&key=${this.key}&token=${this.token}`,
      );
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  upadateCardDesc = async (cardDesc, cardId) => {
    try {
      return await axios.put(
        `${this.url}/1/cards/${cardId}?desc=${cardDesc}&key=${this.key}&token=${this.token}`,
      );
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  updateCardPositionInSameList = async () => {};

  updateCardPositionInAnotherList = async () => {};

  deleteCard = async (cardId) => {
    try {
      return await axios.delete(
        `${this.url}/1/cards/${cardId}?key=${this.key}&token=${this.token}`,
      );
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  //Comments

  fetchComments = async (cardId) => {
    try {
      const response = await axios.get(
        `${this.url}/1/cards/${cardId}/actions?filter=commentCard&key=${this.key}&token=${this.token}`,
      );
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  createComment = async (cardId, text) => {
    try {
      const response = await axios.post(
        `${this.url}/1/cards/${cardId}/actions/comments?text=${text}&key=${this.key}&token=${this.token}`,
      );
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  updateComment = async (cardId, commentId, text) => {
    try {
      const response = await axios.put(
        `${this.url}/1/cards/${cardId}/actions/${commentId}/comments?text=${text}&key=${this.key}&token=${this.token}`,
      );
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  deleteComment = async (cardId, commentId) => {
    try {
      const response = await axios.delete(
        `${this.url}/1/cards/${cardId}/actions/${commentId}/comments?key=${this.key}&token=${this.token}`,
      );
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.response.data);
    }
  };
}

export const request = new Axios();
