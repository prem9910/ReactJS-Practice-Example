import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import vdata from "./data/data";
function App() {

  const [videos,setVideos] = useState(vdata);

  return (
    <>
      <div className="App" onClick={() => console.log("this is app")}>
        <div>
          <button onClick={()=>{
            setVideos([...videos,{
              id: videos.length+1,
              title: "Data Science for Beginners",
              views: "18K",
              time: "1.5 years ago",
              channel: "DataExplorers",
              verified: true,
            }]);
          }} >Add Video</button>
        </div>
        <div className="second-row">
          <div className="heading">YouTube Videos</div>
          {videos.map((video) => (
            <Video
              key={video.id}
              id={video.id}
              verified={video.verified}
              title={video.title}
              channel={video.channel}
              views={video.views}
              time={video.time}
            >
              <PlayButton
                onPlay={() => console.log("Play", video.title)}
                onPause={() => console.log("Paused", video.title)}
              >
                
              </PlayButton>
            </Video>
          ))}
        </div>
        <div className="btn">
          <div>
            {/* <PlayButton
              name="Click it"
              onClick={() => alert("Paused")}
              msg="Pause button is Clicked"
            >
              Pause
            </PlayButton> */}
          </div>
        </div>
        <div>
          <Counter></Counter>
        </div>
      </div>
    </>
  );
}

export default App;
