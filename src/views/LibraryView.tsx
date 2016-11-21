import * as React from 'react'
import { observer } from 'mobx-react';
import { Library } from '../model/Library';

interface ILibraryView {
    model: Library
};

@observer
class LibraryView extends React.Component<ILibraryView, {}> {

    render() {
      return (
        <div>
            <label>Library Name: </label>
            <input type="text" name="name" value={this.props.model.name} 
                onChange={this.handleChange}/>
        </div>
      )
    }

    handleChange = (e) => this.props.model.name = e.target.value;
}

export default LibraryView;