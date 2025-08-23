import logo from "./img/logo.svg";
import "./logo.css";

function Logo() {
    return (
        <div className="App-logo-bakcground">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
    )
}

export default Logo;