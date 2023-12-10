import bg2 from "../assets/32654666113_26d09b05a3_k.jpg";

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
      <div className="home-content">
        <h3>2</h3>
        <h2>STARSHIP SECOND FLIGHT TEST</h2>
        <a href="/">
          <button>Watch Now</button>
        </a>
      </div>
    </section>
  );
};

export default Home2;
