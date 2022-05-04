import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export default function MemoTutorial(){
    const [data,setData] = useState(null);
    const [toggle,setToggle] =useState(false);

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) =>{
            console.log(response.data);
            //设置数据
            setData(response.data);
        });
    },[]);

    //函数被重复调用，一次渲染，执行了两次
    const findLongestName = (comments) =>{
        if (!comments) return null;

        let longesName = "";
        for (let i=0; i < comments.length; i++){
            let currentName = comments[i].name;
            if (currentName.length > longesName.length){
                longesName = currentName;
            }
        }
        console.log("This was computed");
        return longesName;
    }
    /**
     * https://www.digitalocean.com/community/tutorials/react-usememo
     * Memoization is an optimization technique that passes a complex function to be memoized.
     * In memoization, the result is “remembered” when the same parameters are passed-in subsequently.
     */
    const getLongesName = useMemo(()=>findLongestName(data),[toggle]);
    return (
        <div>
            <h1>查找数据</h1>
            {/* <div>{findLongestName(data)}</div> */}
            <div>{getLongesName}</div>
            <button onClick={()=>{
                setToggle(!toggle);
            }}>点击获取请求数据</button>
        </div>
    );
}