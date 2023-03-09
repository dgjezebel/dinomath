//will have the logic of the answer key
import React from "react";
import '../css/equation.css'

function Equation({data, change,disablethis, goodjob}){
    const equation = data[change].equation
    let answer='?'
    if(disablethis===true){
        answer=data[change].answer
    }else{
        answer='?'
    }
    return(
        <>
            <div className='equationDiv'>
                <h3 className='goodjob'>{goodjob}</h3>
                <h3>{equation} = {answer}</h3>
            </div>
        </>
    )
}  
export default Equation