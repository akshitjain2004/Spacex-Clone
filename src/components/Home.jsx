import videoBg from "../assets/x2mate.com-NASA's Mars 2020 Perseverance Rover Landing Animations-(1080p60).mp4"
import "./Home.css"

const Home = () => {
  return (
<section>
  <div className="video-container">
    <video src={videoBg} autoPlay loop muted  width="1280" height="720"></video>
  </div>
        <div className="home-content">
    <h3>RECENT LAUNCH</h3>
    <h2>STARSHIP SECOND FLIGHT TEST</h2>
    <a href="/">Watch Now</a>
        </div>
    </section>
  )
}

export default Home