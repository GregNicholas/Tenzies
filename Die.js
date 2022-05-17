import React from "react"
import {nanoid} from "nanoid"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    const dots = [];
    {for (let i = 1; i<=props.value; i++){
            dots.push(<span key={nanoid()} className='dot'></span>)
        }}
        
    return (
        <div 
            className={`die-face roll ${"face"+props.value}`} 
            style={styles}
            onClick={props.holdDice}
        >
        {dots}
            
        </div>
    )
}