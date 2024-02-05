import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import vdata from "./data/data";
function App() {
  return (
    <>
      <div className="App" onClick={()=>console.log("this is app")}>
        <div className="second-row">
          <div className="heading">YouTube Videos</div>
          {vdata.map((video) => (
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
                
                onPlay={() => console.log("Play",video.title)}
                onPause={() => console.log("Paused",video.title)}
              >
                {video.title}
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
      </div>
    </>
  );
}

export default App;
