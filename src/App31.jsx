import React, {useState} from 'react';

function App31(props) {
  const [person, setPerson] = useState({
    name: "son",
    address: {
      city: "london",
      country: "uk",
    },
  });
  function  handleNameChange(e){
    setPerson( {...person,name: e.target.value })
  }

  function handleCityChange(e){
    /*
    const newPerson = {...person}; // 좋은 코드 아님
    newPerson.address.city = e.target.value;
    console.log(newPerson);
    setPerson(newPerson);
    */

  }

  return (
    <div>
      <div>
        <input type="text" placeholder="이름" value={person.name}
        onClick={handleNameChange}/>
      </div>
      <div>
        <input type="text" placeholder="도시" value={person.address}
        onClick={handleCityChange}/>
      </div>
      <div>
        <input type="text" placeholder="국가" value={person.address}
        />
      </div>
    </div>
  );
}

export default App31;