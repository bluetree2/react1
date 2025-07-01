function MyComp1(param) {
  console.log(param);
  console.log(param.color);
  const color = param.color;

  console.log("컬러변수", color);
  return null;
}

function MyComp2(param) {
  // const address = param.address;
  const { address } = param;
  console.log("주소", address);
  return null;
}

function MyComp3({ address }) {
  console.log("주소3", address);
  return null;
}

function MyComp4({ city }) {
  console.log("도시", city);
  return null;
}

function MyComp5({ city, country, address = "기본 주소" }) {
  console.log("도시5", city);
  console.log("도시5", country);
  return null;
}

function MyComp6({ score, className, location = "기본위치" }) {
  console.log("점수 : ", score);
  console.log("반 이름 : ", className);
  console.log("장소 : ", location);
  return null;
}

function App6() {
  return (
    <>
      <MyComp1 color="yellow" />
      <MyComp1 color="red" />
      <MyComp2 address="seoul" />
      <MyComp2 address="jeju" />
      <MyComp3 address="NewYork" />
      <MyComp4 city="seoul" />
      <MyComp4 city="washington" />
      {/*  MyComp4 함수 작성 w/ 분해 할당으로 props 받기 -> 로그 출력 */}
      <MyComp5 city="인천" contry="한국" address="" />
      <MyComp5 city="텍사스" contry="미국" address="" />
      <MyComp5 city="오사카" contry="일본" />
      {/*연습 MyComp6 이 받은 props를 출력
      location의 기본값은 "기본위치"
       */}
      <MyComp6 score="A" className="중앙" location="신촌" />
      <MyComp6 score="B" className="센터" location="강남" />
      <MyComp6 score="C" className="기린" />
    </>
  );
}

export default App6;
