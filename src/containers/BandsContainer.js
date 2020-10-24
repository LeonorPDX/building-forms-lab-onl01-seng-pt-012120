import React, { Component } from 'react';
import { connect } from 'react-redux';

import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.props.bands.map((band, i) => <li id={i}>{band.name}</li>)}
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)