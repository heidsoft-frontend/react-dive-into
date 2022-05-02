import React, { useState } from "react";

// 状态case2 测试
const StateTutorialV2 = ()=>{
    // 初始化状态
    const [inputValue,setInputValue] = useState("heidsoft");
    // 根据输入内容，现实对应的内容
    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };
    return(
        <div>
            <input placeholder="请输入内容...." onChange={onChange}/>
            {inputValue}
        </div>
    )
}

export default StateTutorialV2;