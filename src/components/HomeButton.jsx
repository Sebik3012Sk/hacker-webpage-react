const HomeButton = (props) => {

  const showLederBoard = () => {
    window.location.assign("/lederboard-hackers");
  }

  if(props.textbutton === "Show Details") {
    return (
        <div className="flex flex-row justify-center mt-8">
            <button type="button" className="home-button">{props.textbutton}</button>
            { console.log("Show Details Button Called") }
        </div>
      )
  } else if (props.textbutton === "Hackers Leaderboard") {
    return (
        <div className="flex flex-row justify-center mt-8">
            <button onClick={showLederBoard} type="button" className="home-button">{props.textbutton}</button>
            { console.log("Hackers Lederboard Button Called") }
        </div>
      )
  }  


  
}

export default HomeButton;