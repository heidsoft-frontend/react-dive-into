import { useLayoutEffect,useEffect, useRef } from "react";

function LayoutEffectTutorial(){
    const inputRef = useRef(null);

    // useLayoutEffect 渲染先于 useEffect
    useLayoutEffect(()=>{
        //console.log("UseLayoutEffect");
        console.log(inputRef.current.value);
    },[]);

    useEffect(()=>{
        //console.log("UseEffect");
        inputRef.current.value="heidsoft"
    },[]);
    

    return (
         <div>
            <input ref={inputRef}  style={{width:400,height: 100}}/>
        </div>
    );
}

export default LayoutEffectTutorial;