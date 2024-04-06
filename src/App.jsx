import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { getDevelopers } from "./queries";
import { request } from "graphql-request";
import Work from "./components/Work/Work";
import About from "./components/About/About";
function App() {
  const [developerData, setDeveloperData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const developersData = await request(
        import.meta.env.VITE_HYGRAPH_ENDPOINT,
        getDevelopers
      );
      setDeveloperData(developersData?.developers?.[0]);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar developerData={developerData} />
      <Routes>
        <Route path="/" element={<Main developerData={developerData} />} />
        <Route path="/works" element={<Work />} />
        <Route
          path="/about"
          element={<About developerData={developerData} />}
        />
      </Routes>
      <Footer developerData={developerData} />
    </div>
  );
}

export default App;
