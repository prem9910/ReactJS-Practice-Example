import './AddVideo.css';

function AddVideo() {

    function handleSubmit(){

    }

    function handleChange(e){
      console.log(e.target.value)
    }

  return (
    <form action="">
      <input type="text" name='title' onChange={handleChange} placeholder="Video title" />
      <input type="text" name='channel' onChange={handleChange} placeholder="Channel Name" />
      <button onClick={handleSubmit}>Add Video</button>
    </form>
  );
}

export default AddVideo;
