function MyAwesomeNutton({color,chileren}){
    return(
        <>
            <button
                style={{
                    color: color,
                    backgroundColor: "red",
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid green",
                    fontSize: "2rem",
                }}
            >
                {chileren}
            </button>
        </>
    );
}

function App12(){
    return (
        <>
            <MyAwesomeNutton>등록</MyAwesomeNutton>
            <hr />
            <MyAwesomeNutton color={"blue"}>저장</MyAwesomeNutton>
            <hr />
            <MyAwesomeNutton color={"yellow"}>수정</MyAwesomeNutton>
        </>
    )
}
const myAddress = "seoul";
export {MyAwesomeNutton,myAddress}

export default App12;