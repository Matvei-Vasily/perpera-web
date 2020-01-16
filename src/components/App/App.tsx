import * as React from 'react';
import Add from 'src/components/Add/Add';
import Status from 'src/components/Status/Status';
import ObservableHelper from 'src/helpers/Observable';
import Header from '../Header/Header';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import Result from '../Result/Result';
import Search from '../Search/Search';
import Test from '../Test/Test';
import './App.css';

class App extends React.Component {

  public componentWillMount() {
    ObservableHelper.on('onSearch', (payload: any) => {
      console.log('Fired!');
      console.log(payload);
    });
  }

  public render() {
    return (
      <div className="AppComp">
        <Header />
        <Search />
        <Add />
        <Status />
        <Result />
        <RegisterPopup />
        <Test />
      </div>
    );
  }
}

export default App;
