import { observable } from 'mobx';

export class Library 
{
    @observable name: string = 'Library';
    @observable books: Book[] = [];
    @observable authors: Writer[] = [];
}

export class Book 
{
    @observable title: string = 'New Book';
    @observable pages: number;
    @observable authors: Writer[] = [];
}

export class Writer 
{
    @observable name: string = 'A. Writer';
    @observable books: Book[] = [];
}
