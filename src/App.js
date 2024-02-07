import { useState } from "react";
import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import vdata from "./data/data";
import AddVideo from "./components/AddVideo";
function App() {
  const [videos, setVideos] = useState(vdata);

  return (
    <>
      <div className="App" onClick={() => console.log("this is app")}>
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
              ></PlayButton>
            </Video>
          ))}
        </div>
        <div>
        <AddVideo></AddVideo>
      </div>
      </div>
      
    </>
  );
}

export default App;
