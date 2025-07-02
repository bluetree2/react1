import React, {useState} from 'react';

function MyComp1() {
    const [number1, setnumber1] = useState(1);
    const [number2, setnumber2] = useState(10);
  return (
    <div>
      <div>
        <div>{number1}</div>
        <button onClick={() => setnumber1(number1+1)}>버튼1</button>
      </div>
      <div>
        <div>{number2}</div>
        <button onClick={() => setnumber2(number2+1)}>버튼2</button>
      </div>
    </div>
  );
}

function MyComp2(){
  // 연습
  // 각 인풋에 입력한 값으로 변경되도록 코드 작성
  const [text1, setText1] = useState("입력");
  const [text2, setText2] = useState("입력");
  return (
    <div>
      <div>
        <input type="text" value={text1}
               onChange={(e) => setText1(e.target.value)}/>
      </div>
      <div>
        <input type="text" value={text2}/>
      </div>
    </div>
  )
}

function App26(props) {
  return (
    <div>
      <MyComp1/>
    </div>
  );
}

export default App26;
