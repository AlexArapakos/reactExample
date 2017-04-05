import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        alert("You've just click the button!");
    }
    render() {
        return (
            <button
                onClick={this.handleClick.bind(this)}
                className={this.props.classType}
            >{this.props.text}</button>
        );
    }
}

Button.propTypes = {
    text: React.PropTypes.string,
    classType: React.PropTypes.string
};

Button.defaultProps = {
    text: "I am an undefined prop",
    classType: "btn btn-default"
};
