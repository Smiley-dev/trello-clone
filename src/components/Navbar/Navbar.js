import React, { useState } from "react";
import {
  NavbarStyled,
  LeftNavSection,
  HomeLink,
  BoardsButton,
  Logo,
  RightNavSection,
} from "./Navbar.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAlignJustify,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import BoardsDropdown from "../NavDropdown/BoardsDropdown";

export default function Navbar() {
  const [dropdownActive, setdropdownActive] = useState(false);

  return (
    <>
      <NavbarStyled>
        <LeftNavSection>
          <HomeLink to="/">
            <FontAwesomeIcon icon={faHome} />
          </HomeLink>
          <BoardsButton onClick={() => setdropdownActive(!dropdownActive)}>
            <FontAwesomeIcon icon={faAlignJustify} />
            Boards
          </BoardsButton>
        </LeftNavSection>
        <Logo to="/">Trello</Logo>
        <RightNavSection>
          <FontAwesomeIcon icon={faUserCircle} />
        </RightNavSection>
      </NavbarStyled>
      <BoardsDropdown
        isActive={dropdownActive}
        setIsActive={setdropdownActive}
      ></BoardsDropdown>
    </>
  );
}
