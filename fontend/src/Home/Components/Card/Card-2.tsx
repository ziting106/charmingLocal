import React from "react";
import Styles from "./Card.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

interface RobotProps {
  id: number;
  name: string;
  email: string;
  price: number;
}
const pig = "book1-2.webp";
const Card: React.FC<RobotProps> = ({ id, name, email, price }) => {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.cardSize}>
        <a href="/product">
          <img alt="robot" src={require(`../../Assets/ProductImg/${pig}`)} />
        </a>
        <FcLikePlaceholder className={Styles.like} />
        <a href="">
          <h2>{name}</h2>
        </a>
        <a href="">
          <p>{email}</p>
        </a>

        <div className={Styles.price}>
          <h3>${price}</h3>
          <p>已售出：</p>
        </div>
      </div>
    </div>
  );
};
export default Card; //導出組件
