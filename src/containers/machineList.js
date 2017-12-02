import React, {Component} from 'react';
import MachineTable from '../components/machineTable';
import { Link } from 'react-router-dom';

class MachineList extends Component {
  constructor(props){
    super(props);

    this.state = {
      machines: [
      {
        name: "test1",
        desc: "i  am test machine"
      },
      {
        name: "test2",
        desc: "this is second test"
      }
    ]};
  }
  render(){
    return(
      <div>
        <Link
          className="btn left-align"
          to={'/machines/new'}
        >
          New Machine
        </Link>
        <MachineTable machines={this.state.machines} />
      </div>
    );
  }
}

export default MachineList;
