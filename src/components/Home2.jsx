import bg2 from "../assets/1.jpg";

const Home2 = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg2})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "500px",
      }}
    >
      <div className="content-outer">
        <div className="home-content">
          <h3>UPCOMING LAUNCH</h3>
          <h2>STARLINK MISSION</h2>
          <a href="/">LEARN MORE</a>
        </div>
      </div>
    </section>
  );
};

export default Home2;
