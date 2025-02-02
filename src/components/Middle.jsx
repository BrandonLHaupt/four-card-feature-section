import supervisor from "./imgs/icon-supervisor.svg";
import builder from "./imgs/icon-team-builder.svg";
import karma from "./imgs/icon-karma.svg";
import calc from "./imgs/icon-calculator.svg";



function Middle() {
  return (
    <div className="middle">
      <div className="container supervisor">
        <h3>Supervisor</h3>
        <p>Monitors activity to identify project roadblocks</p>
        <img src={supervisor} alt="Magnifined Glass" />
      </div>

      <div className="doubleContainer">
        <div className="container teamBuilder">
          <h3>Team Builder</h3>
          <p>Scans our talent network to create the optimal team for your project</p>
          <img src={builder} alt="house" />
        </div>
        <div className="container karma">
          <h3>Karma</h3>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img src={karma} alt="light bulb" />
        </div>
      </div>

      <div className="container calculator">
        <h3>Calculator</h3>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img src={calc} alt="Magnifined Glass" />
      </div>
    </div>
  );
}

export default Middle;
