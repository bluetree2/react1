import React, {useState} from 'react';
function MyComp1(){
  const [count,setCount] = useState(0);

  console.log(count);
  function handleButtonClick(){
    setCount(count+1);
    setCount(count+1);
  }
  return(

  <div>
    {count}
    <br/>
    <button onClick={handleButtonClick}>증가</button>
  </div>
    );
}

function MyComp2() {
  const [count,setCount] = useState(0);

  console.log(count);

  function handleButtonClick() {
    // 상태가 변경되자마자 다시 그리지 않음(re-render)
    // react는 적절한 순간에 변경된 상태로 다시 그림(re-render)
    setCount(count+1);
    setCount(count+2);
  }
    return(
      <div>
        {count}
        <br/>
        <button onClick={handleButtonClick}>증가</button>
      </div>
    );

}

function MyComp3() {
  const [count,setCount] = useState(0);

  console.log(count);

  let number = count;
  function handleButtonClick() {
    setCount(count+2);
  }
    return(
      <div>
        {/*연습 : 버튼 클릭시 number2씩 늘어나도록 코드 수정*/}
        {number}
        <br/>
        <button onClick={handleButtonClick}>증가</button>
      </div>
    );
}

function App24(props) {
  return (
    <div>

      <MyComp3/>
      <hr/>
      <MyComp2/>
      <hr/>
      <MyComp1/>

    </div>
  );
}

export default App24;
