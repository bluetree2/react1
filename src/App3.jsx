// 처음 만드는 component
// compoment : 함수
// compoment명(함수명) : UpperCamelCase
function MyAwesomeButton() {
  //함수 코드 들
  // return 에 : dom에 그려야 할 코드 작성
  return (
    <button
      style={{
        backgroundColor: "red",
        color: "yellow",
        padding: "15px",
        border: "2px solid yellow",
      }}
    >
      너무 잘 만든 버튼
    </button>
  );
}
// MynewHeader 만들기

function MyNewHeader() {
  return (
    <h1
      style={{
        backgroundColor: "coral",
      }}
    >
      내가 만든 제목
    </h1>
    //   주석
    /*주석*/
  );
}

function App3() {
  return (
    <>
      {/*h3>lorem3^p>lorem^button*2>lorem1*/}
      <h3>Lorem ipsum dolor.</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
        consequuntur debitis, deleniti dicta dignissimos, distinctio ducimus
        excepturi impedit iste labore minima, nihil obcaecati odit possimus
        praesentium ratione sed tempore temporibus.
      </p>
      <button>Lorem.</button>
      <button>Tempora.</button>
      <hr />
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "1px solid yellow",
          padding: "10px",
        }}
      >
        너무 잘 만든 버튼
      </button>
      <MyAwesomeButton />
      <MyNewHeader />
      {/*  리엑트는 태그를 정의해서 :쓸 수 있는데 이를 컴포넌트라고 함*/}
    </>
  );
}

export default App3;
