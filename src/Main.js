import React, { Component } from 'react';
import Form from './Form';
import Output from './Output';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return(

      <main id="main">

        <section id="formSection">

          <section id="mainNav">
            <a href="#formSection"><i className="fas fa-angle-double-right fa-2x" id="openNav"></i></a>
            <a href="#top"><i className="fas fa-angle-double-left fa-2x" id="closeNav"></i></a>
          </section>

          <h2>Enter a Location</h2>

          <button id="getLocation" onClick={this.props.getLocationData}>Use my location</button>

          <Form
          
            cityInput={this.props.cityInput}
            cityList={this.props.cityList}
            countryInput={this.props.countryInput}
            countryList={this.props.countryList}
            handleCityInput={this.props.handleCityInput}
            handleCountryInput={this.props.handleCountryInput}
            handleStateInput={this.props.handleStateInput}
            getData={this.props.getData}
            stateInput={this.props.stateInput}
            stateList={this.props.stateList}
            
          />

        </section>

        <Output
          airQuality={this.props.airQuality}
          data={this.props.data}
          dataRequested={this.props.dataRequested}
          mainPollutant={this.props.mainPollutant}
        />

      </main>

    )

  }


}

export default Main;
