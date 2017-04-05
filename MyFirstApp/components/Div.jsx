import React from 'react';
import styles from '../style/style.jsx';

export default class Div extends React.Component {
    render() {
        let finalClass = "container-fluid";
        finalClass += " " + this.props.classType;
        return (
            <div
                className={finalClass}
                style={this.props.setStyle}
            >{this.props.text}</div>
        );
    }
}

Div.propTypes = {
    setStyle: React.PropTypes.object,
    classType: React.PropTypes.string
};

Div.defaultProps = {
    text: "I am an empty Custom Div",
    setStyle: styles.default
};