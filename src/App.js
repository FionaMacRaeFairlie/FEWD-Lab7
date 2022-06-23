import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Locations from "./components/Locations";
import Navigation from "./components/Navigation";
import Person from "./components/Person";
import { people } from "./data/data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />}>
            <Route path=":personId" element={<Person people={people} />} />
          </Route>
          <Route path="locations" element={<Locations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
