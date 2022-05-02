import { useReducer, useState } from "react";

// 定义reducer行为
const reducer = (state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return {count: state.count+1,showText: state.showText};
        case "toggleShowText":
            // 切换行为
            return {count: state.count,showText: !state.showText};
        default:
            return state;
    }
}
const ReducerTutorialV2 = () =>{
    // dispatch 使用
    const [state,dispatch] = useReducer(reducer,{count:0, showText:true});

    return(
        <div>
            <h1>{state.count}V2</h1>
            <button onClick={()=>{
                // 点击一次+1
                // setCounter(count+1);
                dispatch({type:"INCREMENT"});
                // 点击时设置是否显示
                // setShowText(!showText);
                dispatch({type:"toggleShowText"});
            }}>
                点击按钮
            </button>
            {state.showText && <p>云服务圈V2</p>}
        </div>
    );
};

export default ReducerTutorialV2;