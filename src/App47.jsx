import React, {useState} from 'react';
import {BrowserRouter, Route, Routes, useSearchParams} from "react-router";

function Child1() {
  const [keyword, setKeyword] = useState("");
  const [params, setSearchParams] = useSearchParams()

  function handleSearchClick() {
    setSearchParams({keyword: keyword});
  }

  const PageNumbers = [1,2,3,4,5,6,7,8,9,10];

  function handlePageButtonClick(num) {
    console.log(num+"로 이동")
    const nextSearchParams = new URLSearchParams(params);
    nextSearchParams.set("page",num);
    setSearchParams(nextSearchParams);

  }

  return (
    <div>
      <input type="text" placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearchClick}>검색</button>
      <hr/>
      {PageNumbers.map((num) => (
        <div style={{cursor: "pointer"}}
             onClick={() => handlePageButtonClick(num)} key={num}>
          {num}
        </div>
      ))}
    </div>
  )
}

function App47(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"board/list"} element={<Child1/>}/>
          {/*<Route path={"member/detail"} element={<Child2/>}/>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App47;