import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        alert("You've just click the button!");
    }
    render() {
        return (
            <button onClick={this.handleClick}>{this.props.text}</button>
        );
    }
}

Button.propTypes = {
    text: React.PropTypes.string
};

Button.defaultProps = {
    text: "I am an undefined prop"
};
