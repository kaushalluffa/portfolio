import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import urlFor from "./utils/utils";

function App() {
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    let QUERY = encodeURIComponent(`*[_type == "project"]`);
    let URL = `https://${
      import.meta.env.VITE_PROJECT_ID
    }.api.sanity.io/v2021-10-21/data/query/${
      import.meta.env.VITE_DATASET
    }?query=${QUERY}`;
    axios
      .get(URL)
      .then((res) => {
       
        setProjects(res.data.result)})
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main projects={projects} urlFor={urlFor} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
