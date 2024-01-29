import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyList from "./components/MyList";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
  <Route index element={<Home />} />
  <Route path="myList" element={<MyList />}/>
      </Routes>
        </BrowserRouter>
        )}
