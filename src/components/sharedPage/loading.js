import { useState,useEffect } from "react";
import BounceLoader from 'react-spinners/BounceLoader';
import SignUp from "../pages/SignUp/SignUp";

function Loading() {
    const [loading,setLoading]=useState(false)
useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },5000)
},[])    
return(
    <div className='flex justify-center my-32'>
    {
    loading?
        <BounceLoader color={"#36d7b7"} loading={loading}  size={300} />
        :
        <SignUp></SignUp>

    
    
       

}
</div>
)

        

};

export default Loading;