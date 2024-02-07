import './AddVideo.css';

function AddVideo() {

    function handleSubmit(){

    }

  return (
    <form action="">
      <input type="text" placeholder="Video title" />
      <input type="text" placeholder="Channel Name" />
      <button onClick={handleSubmit}>Add Video</button>
    </form>
  );
}

export default AddVideo;
