import React from "react";
import spinnerImg from '../assets/load.gif';

const Spinner=()=>{
    return (
        <>
            <div>
                <img src={spinnerImg} alt="" className="d-block m-auto" style={{width:'200px'}}/>
            </div>
        </>
    )   
}

export default Spinner;