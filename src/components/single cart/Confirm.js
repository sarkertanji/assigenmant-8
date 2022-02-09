import React from "react";

const Confirm = (props) => {
  const { clickedActor } = props;

  function refreshPage() {
    window.location.reload(false);
  }
  let demanded = 0;
  let name = "";
  for (const click of clickedActor) {
    demanded = demanded + click.demand;
    name = click.name;
  }
  console.log(demanded);
  return (
    <div>
      <h1>Actor Added: {props.clickedActor.length}</h1>
      <h1>Total Cost:{demanded}</h1>
      <h4>Addaded:{name} </h4>
      <button className="regular-btn" onClick={refreshPage}>
        Confirm
      </button>
    </div>
  );
};

export default Confirm;
