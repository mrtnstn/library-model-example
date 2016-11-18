import { observable, action, useStrict } from 'mobx';

useStrict(true);    // make sure the state can only be changed through an action

class AppState {
  @observable appName: string = 'Hello World App';
  @observable description: string = 'Simple template for apps using Typescript, React and MobX.';
  @observable counter: number = 0;

  @action resetCounter(): void {
      this.counter = 0;
  }

  @action increaseCounter(): void {
      this.counter += 1;
  }
}

export const appState = new AppState();
