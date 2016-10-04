import React from 'react';
import Button from './Button.jsx';
import TextField from './TextField.jsx';
import styles from '../style/style.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div style={styles.body}>
                <h1>Hello World!</h1>
                <p>I am some text</p>
                <Button text="click me please" />
                <TextField text="write sth please" />
            </div>
        );
    }
}
