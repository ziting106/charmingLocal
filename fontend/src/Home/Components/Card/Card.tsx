import React from "react";
import Styles from "./Card.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

interface RobotProps {
  ID: number;
  author_name: string;
  product_name: string;
  product_copy: string;
  price: number;
  pic_path: string;
  sell_count: number;
  file_type: string;
}
const pig = "book1-1.webp";
const Card: React.FC<RobotProps> = ({
  ID,
  author_name,
  product_name,
  price,
  pic_path,
}) => {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.cardSize}>
        <a href="/product">
          <img alt="robot" src={require(`../../Assets/ProductImg/${pig}`)} />
        </a>
        <FcLikePlaceholder className={Styles.like} />
        <a href="">
          <h2>{product_name}</h2>
        </a>
        <a href="">
          <p>{author_name}</p>
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
