import * as React from 'react';
import Loader from 'src/components/Loader/Loader';
import './Status.css';

interface IState {
    apiStatus: boolean;
    isLoading: boolean;
}

class Status extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      apiStatus: false,
      isLoading: false
    }
  }
  public componentDidMount(){
    // simplest solution : used getaddress API with old address
    fetch("https://cors-anywhere.herokuapp.com/https://blockbook.peercoin.net/api")
       .then()
       .then(
         (result) => {
           this.setState({
             apiStatus: result.ok
           });
         },
         (error) => {
           this.setState({
             apiStatus: false
           });
         }
       )
  }

  public render() {
    return (
      <div className="StatusComp">
        {this.state.isLoading && <Loader />}
        {this.state.apiStatus && <div className="status-btn"><img src="img/status_on.svg"/></div>}
        {!this.state.apiStatus && <div className="status-btn"><img src="img/status_off.svg"/></div>}
      </div>
    );
  }
}

export default Status;
