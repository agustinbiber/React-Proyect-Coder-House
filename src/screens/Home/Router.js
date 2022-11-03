import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Error404 from "../../components/Home/Error404";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import React from "react";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
                <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
                <Route path="/*" element={<Error404 />}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;