import React from 'react';
import {BrowserRouter, Outlet, Route, Routes} from "react-router";

// /react/learn
// /react/tutorial
// /react/docs
// /react/api

function ReactLayout() {
  return (
    <div>
      <div className="d-flex justify-content-around">
        <div>NAVBAR</div>
        <div>
          <a href="/react/learn">LEARN</a>
        </div>
        <div>
          <a href="/react/tutorial">TUTORIAL</a>
        </div>
        <div>
          <a href="/react/docs">DOCS</a>
        </div>
        <div>
          <a href="/react/api">API</a>
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