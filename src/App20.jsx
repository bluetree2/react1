import React from 'react';
// rsf : 초기 폼 자동 완성[


function AwesomeButton({children, onclick}){
  return <button
  onClick={onclick}
    style={{
    padding : "10px",
    backgroundColor: "black",
    color: "white",
    fontSize: "2rm"
  }}>{children}</button>
}

function AwesomeHeader(onclick,children) {
  return <h1
  onDoubleClick={onclick}
  style={{
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    fontSize: "2rm"
  }}>{children}</h1>
}

function App20(props) {
  return (
    <div>
      {/*연습 : AwesomeHeader를 만들고 마우스가 더블크릵하면 콘솔에 메시지 출력*/}
      {/*<h1 style={접절한 스타일 주기}></h1>*/}
      <AwesomeHeader onclick={() => console.log("더블클릭")}></AwesomeHeader>
      
      <button onClick={() => console.log("보통의 버튼 클릭")}></button>

      <AwesomeButton onclick={() => console.log("멋진버튼1 클릭")}></AwesomeButton>
      <button
        variant={"outline-danger"}
        onClick={() => console.log("부트스트립")}
              >
        부트스트랩 버튼 
      </button>
    </div>
  );
}

export default App20;