import { useEffect } from "react";
import { useRef, useState } from "react";

const UseRefExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const previousCount = useRef();
  const previousValue = useRef();

  const changeHanler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);

    useEffect(() => {
      previousCount.current = count;
    }, [count]);
  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHanler} />
      <p>
        my name is {inputValue} and it used to be {previousValue.current}
      </p>
      <div>
        <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
          generate random
        </button>
        <div> count is : {count}</div>
        <div>previous count is : {previousCount.current}</div>
      </div>
    </div>
  );
};

export default UseRefExample;
// import { useRef, useState } from "react";

// const useRefEx = () => {
//   // const [inputValue, setInputValue] = useState("");

//   // const inputRef = useRef();

//   // const resetHandler = () => {
//   //   setInputValue("");
//   //   inputRef.current.focus();
//   // };
//   // const changeHandler = (e) => {
//   //   setInputValue(e.target.value);
//   // };
//   return (
//     <div><h1>hello world</h1></div>
//     // <div>
//     //   <input
//     //     type="text"
//     //     value={inputValue}
//     //     onChange={changeHandler}
//     //     ref={inputRef}
//     //   />
//     //   <button onClick={resetHandler}>reset</button>
//     // </div>
//   );
// };

// export default useRefEx;
