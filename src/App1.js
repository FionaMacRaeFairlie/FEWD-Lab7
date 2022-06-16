import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyledLayout from "./paths/StyledLayout";
import Home from "./paths/Home";
import Locations from "./paths/Locations";
import Search from "./paths/Search";
import List from "./paths/List";
import Item from "./paths/Item";
import MenuItems from "./paths/MenuItems";
import NoPage from "./paths/NoPage";
import AboutUs from "./paths/AboutUs";
import Person from "./paths/Person";

const items = [
  {
    id: "1",
    name: "carrot cake",
    description: "home made here",
    price: "2.50",
    category: "cake",
    available: "no",
  },
  {
    id: "2",
    name: "sandwiches",
    description: "with a variety of fillings",
    price: "2.50",
    category: "snack",
    available: "no",
  },
  {
    id: "3",
    name: "salad",
    description: "uses seasonal local produce",
    price: "3.50",
    category: "side",
    available: "yes",
  },
  {
    id: "4",
    name: "hot chocolate",
    description: "with fully fat or skimmed milk",
    price: "2.00",
    category: "drinks",
    available: "yes",
  },
  {
    id: "5",
    name: "chocolate cake",
    description: "with cream",
    price: "2.50",
    category: "cake",
    available: "yes",
  },
  {
    id: "6",
    name: "soup",
    description: "ask for soups available today",
    price: "2.00",
    category: "snack",
    available: "yes",
  },
  {
    id: "7",
    name: "pizza",
    description: "ham and pineapple or four cheese",
    price: "5.00",
    category: "main",
    available: "yes",
  },
  {
    id: "8",
    name: "baked potato",
    description: "with cheese, coleslaw, beans or tuna",
    price: "4.50",
    category: "main",
    available: "yes",
  },
  {
    id: "9",
    name: "apple pie",
    description: "with cream or custard",
    price: "3.50",
    category: "pudding",
    available: "yes",
  },
  {
    id: "10",
    name: "cheesecake",
    description: "with cream",
    price: "3.00",
    category: "pudding",
    available: "yes",
  },
  {
    id: "11",
    name: "fish and chips",
    description: "locally caught ",
    price: "6.50",
    category: "main",
    available: "yes",
  },
  {
    id: "12",
    name: "lasagne",
    description: "with chips or garlic bread",
    price: "6.50",
    category: "main",
    available: "yes",
  },
  {
    id: "13",
    name: "ice cream",
    description: "various flavours",
    price: "2.50",
    category: "pudding",
    available: "yes",
  },
  {
    id: "14",
    name: "coffee",
    description: "freshly ground",
    price: "1.50",
    category: "drinks",
    available: "yes",
  },
  {
    id: "15",
    name: "tea",
    description: "a range of varieties",
    price: "1",
    category: "drinks",
    available: "yes",
  },
  {
    id: "16",
    name: "pasta",
    description: "with a tomato and garlic sauce",
    price: "5.50",
    category: "main",
  },
  {
    id: "17",
    name: "chips",
    description: "with ketchup or mayonnaise",
    price: "3",
    category: "side",
    available: "yes",
  },
];

const people = [
  { id: "1", fullName: "Jamie Smith" , bio:"Jamie is a chef who is passionate about healthy eating"},
  { id: "2", fullName: "Nick Brown" , bio:"Nick values fresh local produce and reinventing classic dishes"},
];
const restaurants = [
    {id: "1", location:"Giffnock  South Glasgow"},
    {id: "2", location:"Bearsden  North Glasgow"},
    {id: "3", location:"Falkirk"},
    {id: "4", location:"Stirling"},
]


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
