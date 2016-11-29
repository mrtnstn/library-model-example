import { observable, action } from 'mobx';
import uuid from 'uuid';

export class Library 
{
    @observable name: string = 'Library';
    @observable books: Book[] = [];
    @observable authors: Writer[] = [];

    @action
    setName(newName: string) {
        this.name = newName;
    }

    @action
    addBook(newBook: Book) {
        this.books.push(newBook);
    }

    @action
    addAuthor(newAuthor: Writer) {
        this.authors.push(newAuthor);
    }    

}

export class Book 
{
    uuid: string;
    @observable title: string = 'New Book';
    @observable pages: number;
    @observable authors: Writer[] = [];

    constructor() {
        this.uuid = uuid();
    }

    @action
    setTitle(newTitle: string) {
        this.title = newTitle;
    }

    @action
    setPages(newPages: number) {
        this.pages = newPages;
    }
}

export class Writer 
{
    uuid: string;
    @observable name: string = 'A. Writer';
    @observable books: Book[] = [];

    constructor() {
        this.uuid = uuid();
    }
}
