import React from "react"
// import { useNavigate } from "react-router";
import { Routes, Route, Outlet } from "react-router-dom";
import './styles/App.css';

// Components 
import Navigation from "./components/Navigation";
// Pages
import UserBooking from "./pages/UserBooking";
import CenterChoice from "./pages/CenterChoice";
import EditBooking from "./pages/EditBooking";


function App() {

  function Page() {
    return (
      <div className="mx-auto">
        <Outlet />
      </div>
    )
  }

  function Test() {
    return (
      <h1>
        am i working?
      </h1>
    )
  }
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/book" element={<Page />} >
          <Route path="" element={<CenterChoice />} />
          <Route path="edit/:id" element={<EditBooking/>}/>
          <Route path=":id/new" element={<UserBooking />} />
        </Route>
        <Route path="/location" element={<Page />} />



      </Routes>



    </div>
  );
}

export default App;
