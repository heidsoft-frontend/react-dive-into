import { useState } from "react";

const ReducerTutorial = () =>{
    // 初始化状态
    const [count,setCounter] = useState(0);
    const [showText,setShowText] = useState(true);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{
                // 点击一次+1
                setCounter(count+1);
                // 点击时设置是否显示
                setShowText(!showText);
            }}>
                点击按钮
            </button>
            {showText && <p>云服务圈</p>}
        </div>
    );
};

export default ReducerTutorial;