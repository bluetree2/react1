import React from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router";
import {Button} from "react-bootstrap";

function MainLayout() {
  const navigate = useNavigate();
  function handleHomeClick() {
    navigate("/home");
  }

  function handleQWEClick() {
    navigate("/qwe");
  }

  function handleASDClick() {
    navigate("/asd");
  }

  return (
    <div>
      <div>
        {/*/로 이동*/}
        <Button onClick={handleHomeClick} variant={"outline-info"}>HOME</Button>
        {/* /QWE 로 이동*/}
        <Button onClick={handleQWEClick} variant={"outline-info"}>QWE</Button>
        {/* ASD로 이동*/}
        <Button onClick={handleASDClick} variant={'outline-info'}>ASD</Button>
        <Button onClick={() => navigate(-1)}>이전</Button>
      </div>
    </div>
  )
}

function App51(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="home" element={<div>home</div>}/>
            <Route path="qwe" element={<div>qwe</div>}/>
            <Route path="asd" element={<div>asd</div>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App51;