import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyList from "./components/MyList";
import Full_TV_Show from "./components/Full_TV_Show";
import Full_Movies from "./components/Full_Movies";

export default function App() {
  const [listItems,setListItems]=useState([]);
  const [filteredData,setFilteredData]=useState([]);
  const AddtoList=(movie)=>{
    const itemExist=listItems.find((item)=>item.movie.id===movie.id);
    if(itemExist){
      const updateList=listItems.map((list)=>(
        list.id===movie.id ? {...list, quantity:quantity + 1} : list
      ))
      setListItems(updateList);
      setFilteredData(updateList);
    }else{
      setListItems([...listItems,{movie:movie,quantity:1}]);
      setFilteredData([...listItems,{movie:movie,quantity:1}])
    }
  }
  const FilterByMovieName = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilteredData(
      listItems.filter((item) => {
        const movieTitle =item.movie.title || item.movie.name;
        return movieTitle.toLowerCase().includes(searchTerm);
      })
    );
  };
  return (
    <BrowserRouter>
    <Routes>
  <Route index element={<Home AddtoList={AddtoList} />} />
  <Route path="myList"
   element={
  <MyList listItems={listItems}
  filteredData={filteredData}
  FilterByMovieName={FilterByMovieName} />}/>
  <Route path="tvShows" element={<Full_TV_Show AddtoList={AddtoList} />} />
  <Route path="allMovies" element={<Full_Movies AddtoList={AddtoList} />} />
      </Routes>
        </BrowserRouter>
        )}
