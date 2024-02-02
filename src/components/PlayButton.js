import "./PlayButton.css";

function PlayButton({msg,children,onClick}){

    function handleClick(){
        onClick();
    }
    return (
        <button onClick={handleClick}>{children}</button>
    )
}

export default PlayButton;