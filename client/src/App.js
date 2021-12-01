import React from "react"
import { useNavigate } from "react-router";
import { Routes, Route, Outlet } from "react-router-dom";
import './styles/App.css';
import Navigation from "./components/Navigation";


function App() {

  function Page() {
    return (
      <>
        <h1>Hello</h1>
      </>
    )

  }
  return (
    <div className="App">
      <Navigation />
      <h1>
        Hello
      </h1>

      <Routes>
        <Route path="/book" element={<Page />} />



      </Routes>



    </div>
  );
}

export default App;
