function MyComp1({ name = "son", age = 44, city = "london" }) {
  // {] : jsx 내애서 js 코드 작성하느 부분
  return (
    <>
      <ul>
        <li>이름 : {name}</li>
        <li>나이 : {age}</li>
        <li>도시 : {city}</li>
      </ul>
    </>
  );
}

function MyComp2({ name, score }) {
  return (
    <>
      <h3>
        이름은 {name}이고 점수는 {score}입니다
      </h3>
    </>
  );
}

function app8() {
  return (
    <>
      <MyComp1 />
      <MyComp1 name={"lee"} />
      <MyComp1 name={"kim"} age={55} />
      <MyComp1 name={"park"} age={66} city={"london"} />
      {/*  연습 : 이름은 홍길동이고 점수는 98입니다*/}
      <MyComp2 score={98} name="홍길동" />
      <MyComp2 score={88} name="장길신" />
      <MyComp2 score={77} name="임꺽정" />
    </>
  );
}
export default app8;
