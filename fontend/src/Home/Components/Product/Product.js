// 功能：取得全部商品資料。Method: GET。URL: /api/product
// Where -> 產品名稱 & 使用者
// 計算筆數 => Json轉陣列
// 功能：刪除商品。Method: DELETE。URL: /api/product/:id
import React from "react";
import Style from "./Product.module.css";
import Card from "../Card/Card";
import productitem from "../../Mockdata/product_items.json"

function MyProduct() {
  return (
    <>
      <div className={Style.arrangement}>
        <ul className={Style.cardFlex}>
            {productitem.map((r) => (
              <div>
              <Card ID={r.ID} author_name={r
              .author_name} product_name={r.product_name} product_copy={r.product_copy} price={r.price}/>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
}
export default MyProduct;
