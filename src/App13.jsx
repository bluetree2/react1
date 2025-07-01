// import : 가져오기
// named export는 이름을 명시해서 import
// 중복을 피하기 위해 as로 별칭 주기 가능
import {myAddress as myAddress1,MyAwesomeNutton} from "./App12.jsx";
import {myAddress as yourAddress} from "./App11"; // .jsx 생략 가능

// default export 한 값은 아무 이름으로 import 해도됨
import App233 from "./App12.jsx";

function App13(){
    return (
        <>
            <h3>13번 파일</h3>
            <MyAwesomeNutton color={"skyblue"}>저장</MyAwesomeNutton>
            <hr/>
            {myAddress1}, {yourAddress}
            <hr/>
            <App233/>
        </>
    );
}

export default App13;