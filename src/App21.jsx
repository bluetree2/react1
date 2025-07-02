import React from 'react';

function App21(props) {
  function handleButtonClick(e) {
    // e : event 객체
    console.log(e);

    
    // e.stopPropagation(); : 이벤트 전달 막기
    e.stopPropagation();
    console.log("버튼 클릭");
  }

  function handlePtagClick() {
    console.log("para 클릭");
  }

  return (
    <div className="p-5 bg-info" onClick={()=>console.log("div클릭")}>
      {/*연습 : p 클릭 이벤트가 div까지 전파되지 않도록 코드 수정*/}
      <p className="bg-danger" onClick={handlePtagClick}>
        Lorem ipsum dolor sit amet.
      </p>

      <button onClick={handleButtonClick}>버튼</button>


    </div>
  );
}

export default App21;