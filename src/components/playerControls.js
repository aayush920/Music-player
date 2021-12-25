import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay,faPause,faForward,faBackward} from '@fortawesome/free-solid-svg-icons';

function playerControls(props) {
    return (
        <div className="controls">
            <button className="skip">
                <FontAwesomeIcon icon={faBackward} onClick={()=>props.skipSong(false)} />
            </button>

            <button className="play" onClick={()=>props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause:faPlay} />
            </button>

            <button className="forward">
                <FontAwesomeIcon icon={faForward} onClick={()=>props.skipSong()}/>
            </button>
        </div>
    )
}

export default playerControls
