import * as React from 'react'
import { observer } from 'mobx-react';
import { Library } from '../model/Library';

interface ILibraryView {
    model: Library
};

@observer
class LibraryView extends React.Component<ILibraryView, {}> {

    render() {
      let library = this.props.model;
      return (
        <div>
            <label>Library Name: </label>
            <input type="text" name="name" value={library.name} 
                onChange={this.handleChange}/>
            <div>
                <label>Books: </label>
                <ol>
                    {library.books.map((book) => 
                        <li key={book.uuid}>{book.title}</li>)}
                </ol>
            </div>
            <div>
                <label>Authors: </label>
                <ol>
                    {library.authors.map((author) => 
                        <li key={author.uuid}>{author.name}</li>)}
                </ol>
            </div>
        </div>
      )
    }

    handleChange = (e) => this.props.model.name = e.target.value;
}

export default LibraryView;