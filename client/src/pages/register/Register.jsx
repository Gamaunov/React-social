import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Reactivity</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Reactivity
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input className="registerInput" placeholder="Username" />
            <input className="registerInput" placeholder="Email" />
            <input className="registerInput" placeholder="Password" />
            <input className="registerInput" placeholder="Password" />
            <button className="registerButton">Sign up</button>
            <button className="registerRegisterButton">Log into account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
