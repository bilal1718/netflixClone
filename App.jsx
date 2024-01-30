import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyList from "./components/MyList";

export default function App() {
  const [listItems,setListItems]=useState([]);
  const AddtoList=(movie)=>{
    const itemExist=listItems.find((item)=>item.movie.id===movie.id);
    if(itemExist){
      const updateList=listItems.map((list)=>(
        list.id===movie.id ? {...list, quantity:quantity + 1} : list
      ))
      setListItems(updateList);
    }else{
      setListItems([...listItems,{movie:movie,quantity:1}]);
    }
  }
  return (
    <BrowserRouter>
    <Routes>
  <Route index element={<Home AddtoList={AddtoList} />} />
  <Route path="myList" element={<MyList listItems={listItems} />}/>
      </Routes>
        </BrowserRouter>
        )}
