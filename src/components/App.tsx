import * as React from 'react'
import { observer } from 'mobx-react';
import { appState } from '../AppState';

export default observer(() => 
<div>
    <h2>{appState.appName}</h2>
    <p>{appState.description}</p>
    <p>Count: {appState.counter}</p>
    <button onClick={(e) => appState.resetCounter()}>Reset</button>&nbsp; 
    <button onClick={(e) => appState.increaseCounter()}>Hit me!</button>
</div>
)