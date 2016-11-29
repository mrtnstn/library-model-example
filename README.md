# Library Model Example

An experiment to create a model editor using Typescript, React and MobX.

Starting point was the typescript-react-project template from https://github.com/mrtnstn/typescript-project-template.

## Run the example

```
npm install
npm start
open http://localhost:3000
```

## Change log

Version 0.0.1:
* Initial README.md
* Initial metadata in e.g. package.json

Version 0.0.2:
* A simple Library model specified using typescript classes
* A simple LibraryView, just a form to edit the library's name.

Version 0.0.3:
* Extended the LibraryView to also list its books and authors.
* Added a UUID to model objects to be used as key by React components.
* Added methods addBook and addAuthor to the Library class.

Version 0.0.4:
* Added the ability to select model elements
* Added a simple property form for books
