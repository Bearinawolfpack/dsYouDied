import React from "react";

const BeyCard = (props) => {

  return (
    <div>
      <h3>{props.slayObj.name}</h3>
      <img src={props.slayObj.img} alt="" value={props.slayObj.id} onClick={() => props.clickHandler(props.slayObj.id)}/>
    </div>
  );
};

export default BeyCard;
