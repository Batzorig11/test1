import hero from "../assets/hero.svg";
import sum from "../assets/sum.svg";
import download from "../assets/download.svg";
import round from "../assets/round.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero1">
        <div className="sum">
          <img src={sum} alt="" />
        </div>
        <div className="busad">
          <div className="text">
            <span className="white">CREATIVE UI</span>
            <span className="blue">DESIGNER</span>
          </div>
          <div className="buttons">
            <button className="bluebutton">Hire me</button>
            <button className="blackbutton">
              Download CV <img src={download} alt="" className="download" />
            </button>
          </div>
        </div>
      </div>

      <div className="hero2" style={{ padding: "50px" }}>
        <img className="urd" src={hero} alt="" />
        <div className="munkhbayar"></div>
        <img className="ard" src={round} alt="" />
      </div>
    </div>
  );
}

export default Hero;
