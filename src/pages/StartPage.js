import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/startpage.css'

export default function StartPage(){
    const [game, setGame]=useState('Pick a Game')
    const whichGame=(e)=>{
        setGame(e.target.id)
    }
    return(
    <div className='startdiv'>
        <div className='buttonDiv'>
            <div type='radio' name='btn' className='button addition' onClick={(e)=>whichGame(e)} id='Addition'>+</div>
            <div type='radio' name='btn' className='button subtraction' onClick={(e)=>whichGame(e)} id='Subtraction'>-</div>
        </div>
        <div className='playDiv'>
        <div className='gameDiv'><h1>{game}</h1></div>
            <Link className='playbutton' to={"/game"} state={game}></Link>
        </div>
    </div>
    )
}