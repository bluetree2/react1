import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router";

// 연습 : react router 사용해서 아래 경로에 따른 컴포넌트 다르게 보이기
// learn : <h3>react 배우기</h3?
// tutorial : <h3>react 공부하기</h3>
// install : <h3>react 설치하기</h3>
function Learn() {
  return (
    <div>
      <h3>react 배우기</h3>
    </div>
  )
}

function Tutorial() {
  return (
    <div>
      <h3>react 공부하기</h3>
    </div>
  )
}

function Install() {
  return (
    <div>
      <h3>react 설치하기</h3>
    </div>
  )
}

// reference/react : <h3>react 참고문서</h3>
function App42(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="learn" element={<Learn/>}/>
          <Route path="tutorial" element={<Tutorial/>}/>
          <Route path="install" element={<Install/>}/>
          <Route path="reference/react" element={<h3>react 참고 문서</h3>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App42;