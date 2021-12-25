import {useState,useEffect} from "react";
import Player from "./components/player.js"
function App() {

  const [songs,setSongs]=useState([
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      img_src: "./images/blinding_lts.jpg",
      src: "./music/song-1.mp3"
    },
    {
      title: "DNA.",
      artist: "Kendrick Lamar",
      img_src: "./images/th.jpg",
      src: "./music/song-2.mp3"
    },
    {
      title: "Sunflower",
      artist: "Post Malone, Swae Lee",
      img_src: "./images/sunflower.jpg",
      src: "./music/song-3.mp3"
    },
    {
      title: "Royals",
      artist: "Lorde",
      img_src: "./images/royals.jpg",
      src: "./music/song-4.mp3"
    }
  ])

  const [currentSongIndex,setCurrentSongIndex]=useState(0);
  const [nextSongIndex,setNextSongIndex]=useState(currentSongIndex+1);

  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex+1>songs.length-1){
        return 0;
      }else{
        return currentSongIndex+1;
      }
    });
  },[currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
