import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Routes/Home";
import Weddings from "./Routes/Weddings";
import Animals from "./Routes/Animals";
import Contact from "./Routes/Contact";

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="weddings" element={<Weddings />} />
          <Route path="animalportraits" element={<Animals />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
