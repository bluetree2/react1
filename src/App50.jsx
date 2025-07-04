import React from 'react';
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router";
import {Button} from "react-bootstrap";

function MainLayout() {
  // useNavigate() hook를 사용 :
  // LInk, NavLink 사용 없이 코드로 경로를 이동하는 방법
  const navigate = useNavigate();


  function handleABCClick() {
    navigate("/abc");
  }

  function handleZXYClick() {
    navigate("/zxy");
  }
  function handleASDClick() {
    navigate("/asd");
  }
  return (
    <div>
      <div className="d-flex justify-content-around">
        <div>NAVBAR</div>
        <div><Link to={"/abc"}>abc</Link></div>
        <div><Link to={"/zxy"}>zxy</Link></div>
        <div><Link to={"/asd"}>asd</Link></div>
      </div>
      <div className="d-flex justify-content-around">
        <div>NAVBAR</div>
        <div><Button onClick={handleABCClick} variant="/abc">abc</Button></div>
        <div><Button variant={handleZXYClick}>zxy</Button></div>
        <div><Button variant={handleASDClick}>asd</Button></div>
      </div>
    </div>
  );
}

function App50(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="abc" element={<div>abc</div>}/>
            <Route path="zxy" element={<div>zxy</div>}/>
            <Route path="asd" element={<div>asd</div>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App50;