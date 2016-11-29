import * as React from 'react'
import { observer } from 'mobx-react';
import { Library, Book, Writer } from '../model/Library';
import { appState } from '../AppState';
import BookForm from './BookForm';

interface ILibraryView {
    model: Library
};

@observer
class LibraryView extends React.Component<ILibraryView, {}> {

    render() {
      let library = this.props.model;
      return (
        <div>
            <div onClick={(e) => appState.setSelection(null)}>
                <div>
                    <label>Library Name: </label>
                    <input type="text" name="name" value={library.name} 
                        onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Books: </label>
                    <ol>
                        {library.books.map((book) => 
                            <li key={book.uuid} onClick={(e) => { appState.setSelection(book); e.stopPropagation(); } }
                                className={appState.selection == book ? 'selected' : ''}>{book.title}</li>)}
                    </ol>
                </div>
                <div>
                    <label>Authors: </label>
                    <ol>
                        {library.authors.map((author) => 
                            <li key={author.uuid} onClick={(e) => { appState.setSelection(author); e.stopPropagation(); } }
                                className={appState.selection == author ? 'selected' : ''}>{author.name}</li>)}
                    </ol>
                </div>
            </div>
            <div>
                <label>Properties: </label>
                {appState.selection ? 
                    appState.selection instanceof Book ? <BookForm book={appState.selection}/> : ''
                    : ''}
            </div>
        </div>
      )
    }

    handleChange = (e) => this.props.model.setName(e.target.value);
}

export default LibraryView;