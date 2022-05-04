import React,{ useRef } from "react";
import Button from "../Button/Button";

function ImperativeHandle(){
    const buttonRef= useRef(null);
    return (
        <div>
            <button onClick={()=>{
                buttonRef.current.alertToggle();
            }}>按钮-父级别按钮</button>
            <Button ref={buttonRef}/>
        </div>
    );
}

export default ImperativeHandle;