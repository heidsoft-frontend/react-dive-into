import { useReducer } from "react";

// 定义reducer行为
// 这样的函数称之为reducer，是因为这种函数与被传入 
// Array.prototype.reduce(reducer, ?initialValue) 的回调函数属于相同的类型。
/**
 * https://blog.logrocket.com/react-usereducer-hook-ultimate-guide/#:~:text=useReducer%20returns%20an%20array%20that,coupled%20to%20a%20specific%20reducer.
 * useReducer 是 React v16.8 附带的附加 Hook 之一。
 * 作为 useState Hook 的替代方案，useReducer 
 * 可帮助您管理 React 应用程序中的复杂状态逻辑。
 * 当与 useContext 等其他 Hook 结合使用时，
 * useReducer 可以很好地替代 Redux、Recoil 或 MobX。
 * 在某些情况下，这是一个更好的选择。
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
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