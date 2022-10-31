import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
// import Nav from "./components/Nav/Nav";
// import ProductDetail from "./pages/ProductDetail/ProductDetail";
// import ProductList from "./pages/ProductList/ProductList";
// import SignUp from "./pages/SignUp/SignUp";
// import Login from "./pages/Login/Login";
// import Buy from "./pages/BuySell/Buy/Buy";
// import Sell from "./pages/BuySell/Sell/Sell";
// import StylePage from "./pages/Style/StylePage";
import Main from "./pages/Main/Main";
// import MyPage from "./pages/MyPage/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/product" element={<ProductList />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/style" element={<StylePage />} />
        <Route path="/mypage" element={<MyPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
