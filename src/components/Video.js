import "./Video.css";

function Video({ title, channel="not available",id, verified, views, time }) {
  return (
    <>
      <div className="container">
        <div className="thumb">
          <img
            src={`https://picsum.photos/id/${id}/200/130`}
            alt="Youtube Videos"
            
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} {verified && '✅' }</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
