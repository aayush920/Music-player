import React from 'react'

function Details(props) {
    return (
        <div className="details">
            <div className="image">
                <img src={props.song.img_src} alt="Image unavailable 😶"/>
            </div>
            <h3 className="title">{props.song.title}</h3>
            <h3 className="artist">{props.song.artist}</h3>
        </div>
    )
}

export default Details
