import React, {Component} from 'react'

class MachineTable extends Component {
  render(){
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Desc</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.props.machines.length &&
              this.props.machines.map((machine, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{machine.name}</td>
                  <td>{machine.desc} </td>
                  <td>
                    <button
                      className="btn"> Show
                    </button>
                    <button className="btn btn-delete">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MachineTable;
