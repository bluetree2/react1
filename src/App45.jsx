import React from 'react';
import {BrowserRouter, Route, Routes, useParams} from "react-router";

function Child1() {
  // react router : 경로 -> dynamic segm
  let param = useParams(); // dynamic segments를 얻는 hook

  console.log(param);
  return (
    <div>
      <h3>{param.mySubPath}번 계시물</h3>
    </div>
  )
}

// 연습 : dynamic segments 사용해서 아래 경로에 해단 컴포넌트 출력하기
// /java/collecion : <h3>collection 배우기</h3>
// /java/io: <h3>io 배우기</h3>
// /java/stream: <h3>stream 배우기</h3>
// /java/class: <h3>class 배우기</h3>

function Child2() {
  let {content} = useParams(); // dynamic segments를 얻는 hook


  return (
    <div>
      <h3>{content} 배우기</h3>
    </div>
  );
}

function App45(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="learn">
            <Route path=":mySubPath" element={<Child1/>} />
          </Route>
          <Route path="java">
            <Route path=":content" element={<Child2/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App45;