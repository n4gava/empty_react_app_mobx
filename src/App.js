import React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class App extends React.Component{
  @observable value = 0;

  OnClick = () =>  {
    this.value++;
  }

  render()
  {
    return (
      <React.Fragment>
        <h1>{this.value}</h1>
        <button onClick={this.OnClick}>Click</button>
      </React.Fragment>
    );
  }
}

export default App;
