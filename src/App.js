import "./App.css";
import Video from "./components/Video";
import vdata from "./data/data";
function App() {
  
  return (
    <>
      <div className="App">
        <div className="first-row">
          <div className="heading">3 Different Components</div>
          <Video
            id="8"
            verified={true}
            title="React JS tutorial"
            channel="CodeWithPrem"
            views="15K"
            time="5hr ago"
          ></Video>
          <Video
            id="13"
            verified={true}
            title="HTML tutorial"
            channel="CodeWithPrem"
            views="102K"
            time="1 year ago"
          ></Video>
          <Video
            id="25"
            verified={false}
            title="Python tutorial"
            channel="CodeWithPrem"
            views="1M"
            time="1 year ago"
          ></Video>
        </div>
        <div className="second-row">
          <div className="heading">One Component With Loop</div>
          {vdata.map((video) => (
            <Video
              key={video.id}
              id={video.id}
              verified={video.verified}
              title={video.title}
              channel={video.channel} 
              views={video.views}
              time={video.time}
            ></Video>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
