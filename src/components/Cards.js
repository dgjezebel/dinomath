//will have the four card choices
import React, { useState } from 'react';
import '../css/cards.css';

const Cards = ({change, data, disablethis, setDisablethis, setGoodjob}) => {
    function imageSelector(){
    }
    let cards = data[change].answerkey.map(answer => 
        <button 
            className={`card c${answer}`}
            onClick={(e)=>choice(e)} 
            id={answer} 
            key={answer} 
            disabled={disablethis}
            >
            {answer}
        </button>)
    const choice=(e)=>{
        let choice = parseInt(e.target.innerHTML)
        let answer = data[change].answer
        if(choice === answer){
            setDisablethis(true)
            setGoodjob('Good Job!')
        }else{
            setGoodjob('Try Again!')
        }
    }
    return(
        <div className='cardsDiv'>
            {cards}
        </div>
    )
}
export default Cards