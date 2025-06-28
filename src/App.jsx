import { useState } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import CookSection from "./Components/CookSection";
import Footer from "./Components/Footer";
import ViewRecipe from "./Components/ViewRecipe";
import ScrolltoTop from "./Components/ScrolltoTop";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import SearchRecipe from "./Components/SearchRecipe";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  const navigate = useNavigate();

  const [searchVal, setSearchVal] = useState("");
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
  };

  const getSearch = () => {
    axios
      .get(`https://dummyjson.com/recipes/search?q=${searchVal}`)
      .then(function (res) {
        setSearch(res.data.recipes);
      })
      .then(navigate("/Search"));
  };

  return (
    <>
      <ScrolltoTop />
      <Navbar
        handleSearchChange={handleSearchChange}
        getSearch={getSearch}
        searchVal={searchVal}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <CookSection />
            </>
          }
        />

        <Route path="/Recipe" element={<ViewRecipe />} />

        <Route path="/Search" element={<SearchRecipe recipes={[search]} />} />

        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
