import React from 'react';

function App22(props) {
  function hadleLinkClick(e) {
    e.preventDefault();
    console.log("링크 클릭됨");
  }
  function onSubmit(e){
    e.preventDefault();
    console.log("링크 클릭됨");
  }

  return (
    <div>
      {/*onSubmit 이벤트 발생 중*/}
      {/*연습 : onSubmit 이벤트 발생시 브라우저 기본 동작을 멈추고*/}
      {/*콘솔에 메세지 출력*/}
      <form action="https://www.google.net">
        <input type="text" name="q"/>
        <button>검색</button>
      </form>
      <button onClick={() => console.log("버튼 클릭됨")}>버튼</button>
      <a href="https://www.google.com"
      onClick={hadleLinkClick}
      >
        구글로 이동
      </a>
      <a href="https://www.naver.com"
         onClick={hadleLinkClick}
      >
        네이버로 이동
      </a>
    </div>
  );
}

export default App22;