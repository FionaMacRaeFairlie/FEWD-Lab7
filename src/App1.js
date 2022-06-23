import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyledLayout from "./components/StyledLayout";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Search from "./components/Search";
import List from "./components/List";
import Item from "./components/Item";
import MenuItems from "./components/MenuItems";
import NoPage from "./components/NoPage";
import AboutUs from "./components/AboutUs";
import Person from "./components/Person";
import {items, people, restaurants } from "./data/data";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StyledLayout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs people={people} />}>
            <Route path=":personId" element={<Person people={people} />} />
          </Route>
          <Route path="menu" element={<MenuItems items={items} />}>
            <Route path=":itemId" element={<Item items={items} />} />
          </Route>
          <Route path="/locations" element={<Locations />}>
            <Route path="search" element={<Search locations={restaurants}  />} />
            <Route path="list" element={<List locations={restaurants}  />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
