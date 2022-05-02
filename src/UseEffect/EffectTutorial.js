import { useEffect, useState } from "react";
import axios from "axios"

function EffectTutorial(){
    const [data, setData] = useState("");
    const [count,setCounter] = useState(0);

    useEffect(()=>{
        axios.get("https://api.github.com/users/mapbox")
        .then((response) =>{
            console.log(response);
            setData(response.data.avatar_url);
            console.log("API WAS Called");
        })
    });

    return <div> 
        <h1>{data}</h1>
        <h1>{count}</h1>
        
        <button onClick={()=>{
            setCounter(count+1)
        }}> 点击加+1</button>
        </div>
}

export default EffectTutorial;