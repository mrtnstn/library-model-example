import { observable, action, useStrict } from 'mobx';

useStrict(true);    // make sure the state can only be changed through an action

class AppState {
  @observable appName: string = 'Library Model Editor';
  @observable description: string = 'An experiment to create a model editor using Typescript, React and MobX.';
  @observable counter: number = 0;

  @action resetCounter(): void {
      this.counter = 0;
  }

  @action increaseCounter(): void {
      this.counter += 1;
  }
}

export const appState = new AppState();
