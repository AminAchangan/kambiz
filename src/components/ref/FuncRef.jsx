import { useEffect } from "react";
import { useRef } from "react";

const FuncRef = () => {
    const inputRef = useRef();
    
    useEffect(() => {
       inputRef.current.focus() 
    },[])
    return <input type="text" ref={inputRef}/>;
};

export default FuncRef;
