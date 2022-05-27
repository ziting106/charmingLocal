import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom'
// import React, { useState } from 'react'

//component
import Footer from "./Home/Components/Footer/Footer";
import PhoneFooter from "./Home/Components/PhoneFooter/PhoneFooter";
import Product from "./Home/Components/Product/Product";

//首頁
import LoginHome from "./Home/Pages/LoginHome/LoginHome";
import UnloginHome from "./Home/Pages/UnloginHome/UnloginHome";
import MyProduct from "./Home/Pages/MyProduct/MyProduct";
import EditProductPage from "./Home/Pages/EditProductPage/EditProductPage";
import AddProduct from "./Home/Pages/AddProduct/AddProduct";
import ProductPage from "./Home/Pages/ProductPage/ProductPage";
// import ProductPage2 from "./Home/Pages/ProductPage/ProductPage4"

//會員
//Pages
import SignInIdentify from "./Account/Pages/SignInIdentify";
import SignInRecover from "./Account/Pages/SignInRecover";
import SignUpInfo from "./Account/Pages/SignUpInfo";
import SignUp from "./Account/Pages/SignUp";
import SignIn from "./Account/Pages/SignIn";

//Pages user
import MyShoppingList from "./Account/Pages/User/MyShoppingList";
import NoticeSetting from "./Account/Pages/User/NoticeSetting";
import MyCollection from "./Account/Pages/User/MyCollection";
import MyAccount from "./Account/Pages/User/MyAccount";
import MyNotice from "./Account/Pages/User/MyNotice";

//購物車頁
// import Cart1 from "./Sales/Pages/Cart/Cart1";
// import Cart2 from "./Sales/Pages/Cart/Cart2";
// import Cart3 from "./Sales/Pages/Cart/Cart3";
// import Cart4 from "./Sales/Pages/Cart/Cart4";
// import MySale from "./Sales/Pages/Order/MySale";
// import Order from "./Sales/Pages/Order/Order";
// import OrderList from "./Sales/Pages/Order/OrderList";

//討論區

function App() {
  document.title = `Charming`;
  return (
    <div>
      <Routes>
        {/* --------首頁------- */}
        <Route path="/" element={<UnloginHome />} />
        {/* 商品總覽頁 */}
        <Route path="/Product/:UserId" element={<LoginHome />} />
        <Route path="/Product/:UserId/:ProductID" element={<ProductPage />} />

        <Route path="/MyProduct" element={<MyProduct />} />
        <Route
          path="/MyProduct/EditProductPage"
          element={<EditProductPage />}
        />
        <Route path="/MyProduct/AddProduct" element={<AddProduct />} />
        {/* <Route path="/LoginHome/Product/:UserId/:ProductID" element={<ProductPage2 />} /> */}
        {/* <Route path="/LoginHome/Product/:UserId" element={<Product />} /> */}


        {/* --------註冊及登入----- */}
        {/* 忘記密碼 */}
        <Route path="/signin/identify" element={<SignInIdentify />} />
        <Route path="/signin/recover" element={<SignInRecover />} />
        {/* 基本資料 */}
        <Route path="/signup/info" element={<SignUpInfo />} />

        {/* 註冊 */}
        <Route path="/signup" element={<SignUp />} />
        {/* 登入 */}
        <Route path="/signin" element={<SignIn />} />

        {/* -------user 登入後頁面------- */}
        <Route path="/shoppinglist" element={<MyShoppingList />} />
        <Route path="/notice/setting" element={<NoticeSetting />} />
        <Route path="/collection" element={<MyCollection />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/notice" element={<MyNotice />} />

        {/* --------商品頁面-------- */}
        {/* <Route path="/Cart1" element={<Cart1 />} />
        <Route path="/Cart2" element={<Cart2 />} />
        <Route path="/Cart3" element={<Cart3 />} />
        <Route path="/Cart4" element={<Cart4 />} />

        <Route path="/MySale" element={<MySale />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/OrderList" element={<OrderList />} /> */}
      </Routes>
      <Footer />
      <PhoneFooter />
    </div>
  );
}

export default App;
