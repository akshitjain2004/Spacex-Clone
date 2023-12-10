import videoBg from "../assets/x2mate.com-NASA's Mars 2020 Perseverance Rover Landing Animations-(1080p60).mp4"
const Home = () => {
  return (
<section>
  <div className="home-bg">
    <video src={videoBg} autoPlay loop muted></video>
  </div>
        <div className="home-content">
    <h3>RECENT LAUNCH</h3>
    <h2>STARSHIP SECOND FLIGHT TEST</h2>
    <a href="/"><button>Watch Now</button></a>
        </div>
    </section>
  )
}

export default Home