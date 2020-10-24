// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';


class BandInput extends Component {
  
  state = {
    name: ''
  }

  handleOnSubmit = e => {
    debugger
    e.preventDefault;
    console.log(this.state);
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  }

  handleOnChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <label>Band Name</label>
        <input type='text' name='name' value={this.state.name} onChange={this.handleOnChange} />
        <button type="submit">Add Band</button>
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default BandInput
