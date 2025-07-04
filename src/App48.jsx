import React, {useEffect} from 'react';
import {BrowserRouter, Link, NavLink, Outlet, Route, Routes} from "react-router";
import './assets/mtstyle.css';

// /react/learn
// /react/tutorial
// /react/docs
// /react/api

function ReactLayout() {
  useEffect(() => {
    // 마운트될 때 실행되는 코드
    console.log("ReactLayout 컴포넌트 마운트 됨");
  }, []);
  return (
    <div>
      {/* 전체 페이지를 다시 마우늩 하지 않으려면 a태그 대신
       link 컴포넌드 사용*/}
      <div className="d-flex justify-content-around">
        <div>NAVBAR</div>
        <div>
          {/*navlink : 현재 경로와 to prop의 값이 같으면 active값이 같으면 active class 추가 함*/}
          <NavLink to="/react/learn">LEARN</NavLink>
        </div>
        <div>
          <NavLink to="/react/tutorial">TUTORIAL</NavLink>
        </div>
        <div>
          <NavLink to="/react/docs">DOCS</NavLink>
        </div>
        <div>
          <NavLink to="/react/api">API</NavLink>
        </div>
      </div>
      {/*자식 경로의 컴포넌트가 출력되는 곳*/}
      <Outlet></Outlet>
    </div>
  );
}

function App48(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react"
                 element={<ReactLayout/>} >
            {/*자식 경로의 컴포넌트가 출력되는 곳*/}
            <Route path="learn" element={<h3>learn 화면</h3>} />
            <Route path="tutorial" element={<h3>tutorial 화면</h3>} />
            <Route path="docs" element={<h3>docs 화면</h3>} />
            <Route path="api" element={<h3>api 화면</h3>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App48;