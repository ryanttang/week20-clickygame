import React from "react";
import CharCard from "../CharCard";

const GameGrid = (props) => (

    <div id="game-grid" className="container justify-content-center">
        {props.chars.map((chars) => (
            <CharCard key ={chars.id} id={chars.id} clickChar={props.clickChars}></CharCard>
        ))}
    </div>
);

export default GameGrid;