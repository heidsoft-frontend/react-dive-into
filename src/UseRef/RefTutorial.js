import React, { useRef } from "react";

function RefTutorial(){
    const inputRef = useRef(null);

    const onClick = ()=>{
        // 输出引用对象的值
        console.log(inputRef.current.value);
        // 获取焦点
        inputRef.current.focus();
    }
    return (
        <div>
            <h1>测试获取输入框如何获取值</h1>
            <input type="text" placeholder="请输入..." ref={inputRef}/>
            <button onClick={onClick}>修改名称</button>
        </div>
    );
}

export default RefTutorial;