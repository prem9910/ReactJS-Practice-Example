import { useState } from "react";
import "./PlayButton.css";

function PlayButton({children,onPlay, onPause}){
    const [playing, setPlaying] =useState(false); //don't use this approach;

    function handleClick(e){
        e.stopPropagation();
        if(playing) onPause();
        else onPlay();

        setPlaying(!playing);

    
    }


    return (
        <button onClick={handleClick}>{playing?'▐▐ ':'▶'}</button>
    )
}

export default PlayButton;