import { useState } from "react";


function Counter({ firstName = "Ckaz", lastName = "Zima", age = 28 }) {
    const [newAge, setNewAge] = useState(age);
    
    const title = "Counter Component";


    const ButtonAdd = () => (
      <button onClick={() => setNewAge(newAge + 1)}>+</button>
    );
    const ButtonMinus = () => (
      <button onClick={() => setNewAge(newAge - 1)}>-</button>
    );

  return (
    <div>
      <div>{title}</div>
      <div>First name: {firstName}</div>
      <div>Last name: {lastName}</div>
      <div>Age: {age}</div>
      <div>
        New age:
        <ButtonAdd setNewAge={setNewAge} newAge={newAge} />
        {newAge}
        <ButtonMinus setNewAge={setNewAge} newAge={newAge} />
      </div>
    </div>
  );
}

// Counter.defaultProps = {
//     firstName: 'Ckaz',
//     lastName: 'Zima',
//     age: 28,
// }

export default Counter;
