import React, {Component} from 'react';
export default class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state= {
      cont: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      cont: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      cont:''
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Agregar tarea:</label>
          <input type="text" onChange={this.handleChange} value={this.state.cont}></input>
        </form>
      </div>
    )
  }
}
