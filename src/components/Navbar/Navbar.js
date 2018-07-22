import React from "react";
import Score from "../Score";

const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
        <span className="navbar-futurama" id="title">Clicky Game</span>
        <div className="align-center">
            {props.gameActive > <span className="navbar-item align-center">{props.result}</span> : <span className="navbar-item align-center">Click Any Character!</span>}
        </div>
        <div className="navbar-item float-right">
            <Score score={props.score} topScore={props.topScore}></Score>
        </div>
    </nav>
);

export default Navbar;