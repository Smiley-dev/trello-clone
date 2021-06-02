/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  DropdownContainer,
  SearchInput,
  SearchContainer,
  CloseSearch,
  Board,
  BoardsLabel,
} from "./BoardsDropdown.style";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import slugify from "slugify";

export default function BoardsDropdown({ isActive, setIsActive }) {
  const boards = useSelector((state) => state.boards.boards);
  const [filteredBoards, setFilteredBoards] = useState(boards);
  const [searchInput, setSearchInput] = useState("");
  const closeSearch = () => {
    setIsActive(!isActive);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput.length === "") {
      setFilteredBoards(boards);
    } else {
      setFilteredBoards(
        boards.filter((board) =>
          board.name.toLowerCase().includes(searchInput.toLowerCase()),
        ),
      );
    }
  }, [searchInput]);

  return (
    <DropdownContainer hidden={isActive ? 0 : 1}>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Find boards by name..."
          onChange={handleSearchInput}
          autoFocus
        />
        <CloseSearch icon={faTimes} onClick={closeSearch} />
      </SearchContainer>
      <BoardsLabel>
        <FontAwesomeIcon icon={faAlignJustify} />
        &nbsp; Boards
      </BoardsLabel>
      {filteredBoards.map((board) => {
        const boardSlug = slugify(board.name);
        return (
          <Board
            key={board.id}
            to={{
              pathname: `/board/${board.shortLink}/${boardSlug}`,
              state: {
                boardId: board.id,
              },
            }}
            onClick={closeSearch}
          >
            {board.name}
          </Board>
        );
      })}
    </DropdownContainer>
  );
}
