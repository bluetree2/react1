import React, {useState} from 'react';
import data from "bootstrap/js/src/dom/data.js";

function MyComp1() {
  const arr = ["java","react","css"];

  return <div>{arr.map((item) => <p>{item}</p>)}</div>;
}

function MyComp2() {
  const datas = [9,5,1,0];
  return (
  <div>
    {/*연습 : datas 를 활용해서 아래처럼 출력*/}
    {/*<ul>
      <li>9</li>
      <li>5</li>
      <li>1</li>
      <li>0</li>
    </ul>*/}
    {datas.map((item) =>
      (<li>{item}</li>)
    )}
  </div>
  );

}

function MyComp3() {
  const [datas,setDatas] = useState(["java","react","spring"]);

  function handlebuttonClick() {
    datas.push("boot");
    console.log(datas);
    // react는 배열을 참조값 비교로 상태가 변경되엇는지 확인
    // 따라서 이전 상태 배열을 복사한 새 배열을 상태변경시 사용해야 함
    setDatas(datas);
  }

  console.log(("상태 변경됨"));

  return (
    <div>
      <ul>

      {datas.map((item) =>
        (<li>{item}</li>)
      )}
      </ul>
      <button onClick={handlebuttonClick}>추가</button>
    </div>
  );
}

function MyComp4() {
  const [datas,setDatas] = useState(["java","react","spring"]);
  function handlebuttonClick() {
    // react는 배열을 참조값 비교로 상태가 변경되엇는지 확인
    // 따라서 이전 상태 배열을 복사한 새 배열을 상태변경시 사용해야 함
    const nextDatas = [...datas,"boot"];
    setDatas(nextDatas);
  }

  console.log(("상태 변경됨"));

  return (
    <div>
      <ul>

        {datas.map((item) =>
          (<li>{item}</li>)
        )}
      </ul>
      <button onClick={handlebuttonClick}>추가</button>
    </div>
  );
}

function MyComp5() {
  const [list, setList] = useState(["곰","독수리","벌"]);
  // const nextlists = [...list];

  // 연습

  function handleBearuttonClick() {
    const nextlists = [...list];
    nextlists.push("곰");
    setList(nextlists);
  }
  function handleEagleuttonClick() {
    // const nextList = [...list];
    // nextList.push("독수리");
    const nextList = [...list, "독수리"];
    setList(nextList);
  }
  function handleBeeuttonClick() {
    setList([...list, "벌"]);
  }


  // 각 버튼 클릭시 새 아이템 추가 디도록 코드 작성
  return (
    <div>
      <button onClick={handleBearuttonClick}>곰 추가</button>
      <button onClick={handleEagleuttonClick}>독수리 추가</button>
      <button onClick={handleBeeuttonClick}>벌 추가</button>
      <button onClick={() => setList([...list, "사자"])}>사자 추가</button>
      <button onClick={() => {
        const nextList = [...list];
        nextList.pop();
        setList(nextList);
      }}>마지막 요소 지우기</button>
      <ul>
        {list.map((item) =>
          (<li>{item}</li>)
        )}
      </ul>
    </div>
  )
}

function MyComp6() {
  const [datas, setDatas] = useState(["java","react","css"]);
  let value;
  // 연습 : 추가버튼 클릭 시 input 에 입력된 내용이 배열에 추가 되도록 코드 작성7
  function handlerAddInputText(){

    setDatas([...datas,value]);
  }

  function handlerInputValue(e) {
    value = e.target.value;
  }

  return (
    <div>
      <input type="text" onChange={handlerInputValue}/>
      <button onClick={handlerAddInputText}>추가</button>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function App29(props) {

  return (
    <div>
      <MyComp6/>
      <hr/>
      <MyComp5/>
      <hr/>
      <MyComp4/>
      <hr/>
      <MyComp3/>
      <hr/>
      <MyComp2/>
      <hr/>
      <MyComp1/>
    </div>
  );
}

export default App29;