import bg3 from "../assets/2.jpg";

const Home3 = () => {
  return (
    <section
      style={{
       backgroundImage: `url(${bg3})`,
      
      
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
          <h2>SARAH-2 MISSION</h2>
          <a href="/">Watch</a>
        </div>
      </div>
    </section>
  );
};

export default Home3;
