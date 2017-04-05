import React from 'react';
import { render } from 'react-dom';
import Div from './components/Div.jsx';
import Button from './components/Button.jsx';
import TextField from './components/TextField.jsx';
import TodosListApp from './components/todos-list-app.jsx';
import styles from './style/style.jsx';

let headerText = <h1>I am a Header!</h1>;
let footerText = <h1>I am a Footer!</h1>;
let appText =
    (<div className="container">
        <h1>I am a Body!</h1>
        <p>I am some text inside a paragraph</p>
        <Button text="Primary Btn" classType="btn btn-primary" />
        <br /><br />
        <Button text="Default Btn" />
        <br /><br />
        <TextField text="write sth please" />
        <Div />
        <TodosListApp />
    </div>);

render(<Div setStyle={styles.header} text={headerText} classType="text-center" />, document.getElementById('header'));
render(<Div setStyle={styles.body} text={appText} />, document.getElementById('app'));
render(<Div setStyle={styles.footer} text={footerText} classType="text-center" />, document.getElementById('footer'));