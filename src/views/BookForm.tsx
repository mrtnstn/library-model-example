import * as React from 'react'
import { observer } from 'mobx-react';
import { Library, Book, Writer } from '../model/Library';

interface IBookForm {
    book: Book
};

@observer
class BookForm extends React.Component<IBookForm, {}> {

    render() {
      let book = this.props.book;
      return (
        <div>
            <div>
                <label>Title: </label>
                <input type="text" name="title" value={book.title} 
                    onChange={this.handleTitleChange}/>
            </div>
            <div>
                <label>Pages: </label>
                <input type="text" name="pages" value={''+book.pages} 
                    onChange={this.handlePagesChange}/>
            </div>
        </div>
      )
    }

    handleTitleChange = (e) => this.props.book.setTitle(e.target.value);

    handlePagesChange = (e) => this.props.book.setPages(1*e.target.value);
}

export default BookForm;