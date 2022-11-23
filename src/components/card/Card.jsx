import React from "react";
import CardImage from "../cardImage/CardImage";
import CardInfo from "../cardInfo/CardInfo";
import CardTitle from "../cardTitle/CardTitle";
import "./card.css";
import { ChevronDown, ChevronUp } from "../../icons";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

function Card({ title, image, info }) {
  return (
    <div className="card">
      <div className="card-body">
        <CardTitle title={title} />
        <CardImage image={image} />
        <CardInfo info={info} />
      </div>
      {/* <div className="down"><ChevronDown /></div> */}
      <div className="signs">
        <FaPlusSquare style={{ fontSize: "20px" }} />
        <FaMinusSquare style={{ fontSize: "20px" }} />
      </div>
    </div>
  );
}

export default Card;
