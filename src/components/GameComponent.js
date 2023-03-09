//page will have cards component and equation component
//also the gameboard componemt
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Cards from './Cards'
import Equation from './Equation'
import { useLocation } from 'react-router-dom'
import addData from '../Data/AdditionData'
import subData from '../Data/subData'
import '../css/gamecomponent.css'

function GameComponent(){
    const [disablethis, setDisablethis] = useState(false)
    const [goodjob, setGoodjob] = useState('What Is:')
    const [change, setChange] = useState(0)
    let location = useLocation();
    let gameinfo=0
    const changeEquation=()=>{
        setChange(Math.floor(Math.random() * 3))
        setDisablethis(false)
        setGoodjob('What Is:')
    }
    if(location.state==='Addition'){
        gameinfo=addData
    }else{
        gameinfo=subData
    }
    return(
        <>
            <div className='backbuttondiv'>
                <div className='backbutton'>
                    <Link 
                        to={'/'} >
                        go  &nbsp; back 
                    </Link>
                </div>
           </div>
            <Cards 
                data={gameinfo}
                change={change}
                disablethis={disablethis}
                setDisablethis={setDisablethis}
                goodjob={goodjob}
                setGoodjob={setGoodjob}
            />
            <Equation
                goodjob={goodjob}
                data={gameinfo}
                change={change}
                disablethis={disablethis}
            />
            <div className='nextbuttonDiv'>
                <button className='nextButton' onClick={()=>changeEquation()}></button>
            </div>
        </>
    )
}
export default GameComponent