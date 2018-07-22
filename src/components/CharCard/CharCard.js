import React from "react";

class CharCard extends React.Component {

    state = {
        id: this.props.id,
        clicked: false
    };

    render() {
        return (
            <div className="cat-button float-left" key={this.props.id} >
                <img className="char-image" id={this.props.id} alt={"char" + this.props.id} src={"assets/img/futurama" + this.props.id + ".jpg"} onClick={this.props.clickChar}/>
            </div>
        );
    }
};

export default CharCard;