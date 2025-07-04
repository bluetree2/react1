import React from 'react';
import {BrowserRouter, Outlet, Route, Routes} from "react-router";

function App52(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react" element={
            <div>
            <div>navbar</div>
              <div>
                <Outlet/>
              </div>
            </div>
          }>
            <Route index element={<div>home</div>} />
            <Route path="learn" element={<div>learn</div>} />
            <Route path="state" element={<div>state</div>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App52;