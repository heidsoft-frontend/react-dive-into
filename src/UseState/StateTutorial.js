import React, { useState } from "react";

// 状态case1 测试
const StateTutorial = ()=>{
    // 初始化状态
    const [counter,setCounter] = useState(0);
    console.log("first "+ counter);
    const increment = ()=>{
        setCounter(counter+1);
        console.log(counter);
    }
    return <div>{counter} <button onClick={increment}>Increment</button> </div>;
}

export default StateTutorial;