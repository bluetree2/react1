function MyComp1() {
  return <h1>hello React</h1>;
}

//이름은  UpperCamelCase
// return 에 그려야 할 html 코드 작성
// 가장의 상위 요소가 하나의 요소만 그려야 함

function MyComp2() {
  return <h2>Hello component</h2>;
}

function MyComp3() {
  return (
    <h1>
      <span>안녕</span>
      <span>컴포넌트</span>
      <button>
        <span>버튼 문구</span>
      </button>
    </h1>
  );
}

function MyComp4() {
  return (
    <div>
      <div>hello</div>
      <div>div</div>
    </div>
  );
}

function MyComp5() {
  // fragment 가장 바깥 요소가 필요 없을 때 <></> 사용
  return (
    <>
      <div>hello</div>
      <div>comp5</div>
    </>
  );
}

function MyComp6() {
  return (
    <>
      <h1>제목</h1>
      <p>Lorem ipsum dolor.</p>
    </>
  );
}

function MyComp7() {
  return (
    <>
      <h2>두번째 제목</h2>
      <p>Lorem ipsum dolor.</p>
    </>
  );
}

function MyComp8() {
  return <h1>hello</h1>;
}

function MyComp9() {
  return (
    <div>
      <h1>Lorem.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        eius, enim est ipsum maiores nulla quia? Adipisci corporis distinctio
        eum iste minima natus nesciunt nostrum quas quis vel. Animi, delectus.
      </p>
    </div>
  );
}

function app4() {
  return (
    <>
      <MyComp1 />
      <MyComp2 />
      <MyComp3 />
      <MyComp4 />
      <MyComp5 />
      <MyComp6 />
      <MyComp7 />
      <MyComp8 />
      <MyComp9 />
    </>
  );
}

export default app4;
