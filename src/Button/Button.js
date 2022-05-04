import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props,ref)=>{
    const [toggle,setToggle] = useState(false);

    //useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，
    //应当避免使用 ref 这样的命令式代码。
    //useImperativeHandle 应当与 forwardRef 一起使用
    //https://juejin.cn/post/6999605449980903431
    //useImperativeHandle(ref, createHandle, [deps])
    //https://reactjs.org/docs/forwarding-refs.html
    useImperativeHandle(ref,()=>({
        alertToggle(){
            setToggle(!toggle);
        }
    }));
    return (
        <>
            <button>
                按钮-子按钮
            </button>
            {toggle && <span>切换</span>}
        </>
    );
});


export default Button;