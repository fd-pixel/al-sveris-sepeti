import { useState } from "react";
import CardImage from "../cardImage/CardImage";
import CardInfo from "../cardInfo/CardInfo";
import CardTitle from "../cardTitle/CardTitle";
import "./card.css";
import { ChevronDown, ChevronUp } from "../../icons";

function Card({ title, image, price }) {
  return (
    <div className="card">
      <div className="card-body">
        <CardTitle title={title} />
        <CardImage image={image} />
        <CardInfo price={price} />
      </div>
    </div>
  );
}

export default Card;
