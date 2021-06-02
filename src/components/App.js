import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sort } from "../redux/actions";
import { DragDropContext } from "react-beautiful-dnd";

import Board from "./Board/Board";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import CardDetails from "./CardDetails/CardDetails";

import { getBoards } from "../redux/actions";
import { request } from "../utils/Axios";

const actionDispatch = (dispatch) => ({
  getBoards: (boards) => dispatch(getBoards(boards)),
});

function App() {
  const dispatch = useDispatch();
  const { getBoards } = actionDispatch(useDispatch());
  const [loading, setLoading] = useState(true);

  const fetchBoards = async () => {
    try {
      const boards = await request.fetchBoards();
      getBoards(boards);
    } catch (err) {
      console.log("Ovo je eror:", err);
    }
  };

  useEffect(() => {
    fetchBoards();
    setLoading(false);
  }, []);

  const handleOnDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type,
      ),
    );
  };

  if (loading) return <div></div>;

  return (
    <Router>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div style={{ height: "100vh" }}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/board/:shortUrl/:name" component={Board} />
          </Switch>
          <Route path="/board/c/:shortUrl/:name" component={CardDetails} />
        </div>
      </DragDropContext>
    </Router>
  );
}

export default App;
