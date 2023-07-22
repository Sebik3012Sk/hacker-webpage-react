import HomeButton from "../components/HomeButton";
import NavBar from "../components/NavBar";
import bg_image from "../images/bg-image.jpg";

const Home = () => {
  const styles = {
    backgroundImage: `url(${bg_image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "95vh"
  };

  return (
    <div style={styles}>
      <NavBar />
      <HomeButton textbutton="Show Details" />
      <HomeButton textbutton="Hackers Leaderboard"/>
    </div>
  );
};

export default Home;