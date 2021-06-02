import React from "react";

import { Link } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
import { CardContainer } from "./Card.style";

const slugify = require("slugify");
export default function Card({ name, id, index, shortLink, desc }) {
  const cardid = id;
  const nameSlug = slugify(name);

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <Link
          to={{
            pathname: `/board/c/${shortLink}/${nameSlug}`,
            state: {
              desc,
              id: cardid,
              name: name,
            },
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {name}
          </CardContainer>
        </Link>
      )}
    </Draggable>
  );
}
