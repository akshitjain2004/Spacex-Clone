import bg4 from "../assets/3.jpg";

const Home4 = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg4})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "500px",
      }}
    >
      <div className="home-content">
        <h3>UPCOMING LAUNCH</h3>
        <h2>USSF-52 MISSION</h2>
        <a href="/">
         LEARN MORE
        </a>
      </div>
    </section>
  );
};

export default Home4;
