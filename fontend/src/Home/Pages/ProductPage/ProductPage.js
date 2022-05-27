// 功能：取得單筆商品資料。Method: GET。URL: /api/product/:id
// 功能：加入購物車，Session productList(key) 買那些產品  / productID(key) 產品ID
// 按圖片會放大 且可以切換上(下)一張
// 顯示超過4張，右邊最後一張要加半黑濾鏡(+N)

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoginNav from "../../Components/LoginNav/LoginNav";
import style from "./ProductPage.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import Designer from "../../Components/Designer/Designer";

function Product() {
  // 連線檔
  const [products, setProducts] = useState([]);
  const catchUserId = useParams();
  console.log(catchUserId);
  const fetchProducts = async () => {
    //向遠端伺服器get資料 http://localhost:3000/Sales/api/product?id=1
    const response = await fetch(
      //取單一商品資料
      `http://localhost:3000/Sales/api/product/${catchUserId.UserId}/${catchUserId.ProductID}`
    );
    const data = await response.json();
    //測試
    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setProducts(data[0]);
    console.log(products);
  };

  // didMount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <LoginNav />
      {/* 商品名稱 */}
      <section className={style.ProductPage}>
        <h3>商品總攬 Page</h3>
        {/* 圖片放置區 */}
        <div className={style.displayFlex}>
          <div className={style.bigImg}>
            <a href=""></a>
          </div>
          <div className={style.smallImg}>
            <a href="">
              {/* <img
                alt="robot"
                src={require(`../../Assets/ProductImg/${[0]}`)}
              /> */}
            </a>
            <a href="">
              {/* <img
                alt="robot"
                src={require(`../../Assets/ProductImg/${[1]}`)}
              /> */}
            </a>
            <a href="">
              {/* <img
                alt="robot"
                src={require(`../../Assets/ProductImg/${[2]}`)}
              /> */}
            </a>
            <a href="">
              {/* <img
                alt="robot"
                src={require(`../../Assets/ProductImg/${[3]}`)}
              /> */}
            </a>
            <a href="">
              {/* <img
                alt="robot"
                src={require(`../../Assets/ProductImg/${[5]}`)}
              /> */}
            </a>
          </div>
        </div>
        {/*  刊登時間，檔案格式 */}

        <div className={style.updateTime}>
          <p>刊登時間{}</p>
          <p>檔案格式{}</p>
        </div>

        {/* 價格，數量，加入購物車按鈕，收藏按鈕 */}
        <div className={style.priceDiv}>
          <p className={style.price}>NT$300{}</p>
          <div className={style.numberCount}>
            <p>購買數量</p>
            <button className={style.shoppingCar}>加入購物車</button>
            <button className={style.productAdd}>收藏商品</button>
          </div>
        </div>
        {/* 商品簡介 */}
        <article className={style.displayFlex}>
          <div>商品介紹</div>
          <div>
            {/* 關於設計師 */}
            <div>關於設計師</div>
            <Designer />
          </div>
        </article>
      </section>
    </>
  );
}
export default Product;
