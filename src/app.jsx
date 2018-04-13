import React, { Component } from 'react';
import TopSpot from './topspot.jsx';
import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
    this.state = {
      topspots: []
    }
  }

  render() {
    return (
      <div className="body">
        <div className="section" id="headers">
          <h3>San Diego Top Spots</h3>
          <span>A list of the top 30 places to see in San Diego, California.</span>
        </div>
        <br />
        <div id="topSpots">
          {
            this.state.topspots.map(topspot => (
              <TopSpot
                key={topspot.id}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
