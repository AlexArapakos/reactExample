import React from 'react';

export default class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textVal: ""
        };
    }
    handleChange(e) {   // change state value
        this.setState ({
            textVal: e.target.value
        });
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder={this.props.text}
                    onChange={this.handleChange.bind(this)}
                />
                <h2>{this.state.textVal}</h2>
            </div>
        );
    }
}

TextField.propTypes = {
    text: React.PropTypes.string
};

TextField.defaultProps = {
    text: "I am an undefined prop"
};