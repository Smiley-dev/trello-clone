import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  HomeContainer,
  BoardsContainer,
  Board,
  NewBoard,
  CreateNewBoard,
  BoardForm,
  BoardTitle,
  SubmitBoardButton,
} from "./Home.style";
import { addBoard, getBoards, setActiveBoard } from "../../redux/actions";
import { request } from "../../utils/Axios";

const slugify = require("slugify");

const actionDispatch = (dispatch) => ({
  getBoards: (boards) => dispatch(getBoards(boards)),
  addBoard: (boardTitle) => dispatch(addBoard(boardTitle)),
  setActiveBoard: (board) => dispatch(setActiveBoard(board)),
});

const Home = () => {
  const [boardTitle, setBoardTitle] = useState("");
  const [newBoardFormOpened, setNewBoardOpened] = useState(false);
  const boards = useSelector((state) => state.boards);
  const { addBoard } = actionDispatch(useDispatch());

  const createBoard = async () => {
    try {
      const newBoard = await request.createBoard(boardTitle);
      addBoard(newBoard);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBoardTitleChange = (e) => {
    setBoardTitle(e.target.value);
  };

  const handleAddBoardClick = () => {
    createBoard();
    setNewBoardOpened(false);
    setBoardTitle("");
  };

  return (
    <HomeContainer>
      <BoardsContainer>
        {boards.boards &&
          boards.boards.map((board) => {
            const boardSlug = slugify(board.name);
            const shortLink = board.shortUrl.split("/").pop();

            return (
              <Board
                key={board.id}
                to={{
                  pathname: `/board/${shortLink}/${boardSlug}`,
                  state: {
                    boardId: board.id,
                    boardName: board.name,
                  },
                }}
              >
                {board.name}
              </Board>
            );
          })}
        <NewBoard onClick={() => setNewBoardOpened(true)}>
          Create new board
        </NewBoard>
        {newBoardFormOpened && (
          <CreateNewBoard>
            <BoardForm>
              <BoardTitle
                placeholder="Board title..."
                onChange={handleBoardTitleChange}
              ></BoardTitle>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <SubmitBoardButton onClick={handleAddBoardClick}>
                  Add Board
                </SubmitBoardButton>
                <FontAwesomeIcon
                  icon={faTimes}
                  size={"lg"}
                  color={"#6b778c"}
                  onClick={() => setNewBoardOpened(false)}
                ></FontAwesomeIcon>
              </div>
            </BoardForm>
          </CreateNewBoard>
        )}
      </BoardsContainer>
    </HomeContainer>
  );
};

export default Home;
