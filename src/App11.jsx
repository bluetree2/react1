function MyComp1({ color, children }) {
  return (
    <>
      <ul>
        <li>color:{color}</li>
        <li>children:{children}</li>
      </ul>
    </>
  );
}

function App11() {
  // 직접만든 컴포넌트 : 대문자로 시작
  // html 컴포넌트(built-in component, 브라우저 컴포넌트) : 소문자로 시작
  // 브라우저 컴포넌트
  return (
    <>
      <MyComp1 color="red">작성된 컨텐츠</MyComp1>
      <h1>제목</h1>
      <p>p</p>
      <div>div</div>
      <a href="http://www.daum.net">daum</a>
      <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVWPCUxWcQS3vqxp8ZgP1TopIHOnO0g9twc0VovvhkWtruL3AaoGczqhYiHbxGyAQrJfq05nTn59jB5Fg70S_87DUQZxjgewsp6LaC4mc"
        alt="사자 그림"
        title={"사자 사진"}
      />
      <br />
      <label htmlFor={"nameInput"}>이름</label>
      <input type="text" id={"nameInput"} />
      <hr />
      <div className={"content"}>hello</div>
    </>
  );
}
export default App11;
