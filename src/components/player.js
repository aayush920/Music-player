import React,{useState,useRef,useEffect} from 'react';
import Details from './detail';
import PlayerControls from './playerControls';

function Player(props) {
    const audioElement=useRef(null);
    const [isPlaying,setIsPlaying]=useState(false); 

    useEffect(()=>{
        if(isPlaying){
            audioElement.current.play();
        }else{
            audioElement.current.pause();
        }
    });

    const skipSong=(forwards=true)=>{
        if(forwards){
            props.setCurrentSongIndex(()=>{
                let temp=props.currentSongIndex;
                temp++;

                if(temp>props.songs.length-1){
                    temp=0;
                }    
                return temp;
            });
        }else{
            props.setCurrentSongIndex(()=>{
                let temp=props.currentSongIndex;
                temp--;
                
                if(temp<0){
                    temp=props.songs.length-1;
                }    
                return temp;
            });
        }
    }
    return (
        <div className="player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioElement}></audio>
            <h4>Playing Now</h4>
            <Details song={props.songs[props.currentSongIndex]}/>
            <PlayerControls 
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                skipSong={skipSong}
            />
            <p>Next up:&nbsp;{props.songs[props.nextSongIndex].title} </p> 
            <br/>
            <p>by:&nbsp;{props.songs[props.nextSongIndex].artist}</p>
        </div>
    )
}

export default Player;
