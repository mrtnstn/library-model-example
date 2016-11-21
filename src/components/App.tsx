import * as React from 'react'
import { observer } from 'mobx-react';
import { appState, model } from '../AppState';
import LibraryView from '../views/LibraryView';

export default observer(() => 
<div>
    <h2>{appState.appName}</h2>
    <p>{appState.description}</p>

    <LibraryView model={model}/>

</div>
)