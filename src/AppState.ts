import { observable, action, useStrict } from 'mobx';
import { Library, Book, Writer } from './model/Library';

useStrict(true);    // make sure the state can only be changed through an action

class AppState {
  @observable appName: string = 'Library Model Editor';
  @observable description: string = 'An experiment to create a model editor using Typescript, React and MobX.';

}

export const appState = new AppState();

var testdata = new Library();

// adding some dummy testdata to the model for testing purposes; 
// TODO: remove before production
testdata.addBook(new Book());
testdata.addBook(new Book());
testdata.addBook(new Book());
testdata.addAuthor(new Writer());
testdata.addAuthor(new Writer());

export const model = testdata;