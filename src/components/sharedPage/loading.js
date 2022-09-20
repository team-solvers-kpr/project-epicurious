import { useState,useEffect } from "react";
import BounceLoader from 'react-spinners/BounceLoader';

function loading() {
    const [loading,setLoading]=useState(false)
useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },5000)
},[])    
return
<div>
    {
        loading?
        <BounceLoader color={"#f93f23"} loading={loading} cssOverride={override} size={60}/>
        :
        <div>
            <h1>hello</h1>
        </div>
     }
</div>
};

export default loading;