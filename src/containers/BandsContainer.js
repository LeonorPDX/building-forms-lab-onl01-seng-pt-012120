import React, { Component } from 'react';
import { connect } from 'react-redux';

import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  
  addBand = (band) => {
    return {
        type: 'ADD_BAND',
        band: band
    }
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.addBand} />
        {this.props.bands.map((band, i) => <li id={i}>{band.name}</li>)}
      </div>
    )
  }
}

const mapState = state => {
  return {
    bands: state.bands
  }
}

const mapDispatch = dispatch => {
  return {
    addBand: (b) => {
      dispatch(this.addBand(b))
    }
  }
}

export default connect(mapState, mapDispatch)(BandsContainer)
