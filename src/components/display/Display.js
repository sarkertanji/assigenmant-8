import React, { useEffect, useState } from "react";
import Carts from "../actor display/Carts";
import Confirm from "../single cart/Confirm";
import "./Display.css";

const Display = () => {
  const [actors, setActors] = useState([]);
  const [clickedActor, setClickedActor] = useState([]);
  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);
  const hendaleEvent = (props) => {
    const addedActor = [...clickedActor, props];
    setClickedActor(addedActor);
  };
  return (
    <div className="display-section">
      <div>
        <h1>Details about those who will be in the film</h1>
        <div className="carts">
          {actors.map((actor) => (
            <Carts
              key={actor.id}
              hendaleEvent={hendaleEvent}
              actor={actor}
            ></Carts>
          ))}
        </div>
      </div>
      <div className="cast-confirmation">
        <Confirm clickedActor={clickedActor}></Confirm>
      </div>
    </div>
  );
};

export default Display;
