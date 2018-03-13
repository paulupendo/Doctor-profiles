import React, { Component } from "react";

import "./GoogleMap.css";

export default class GoogleMap extends Component {
  componentDidMount() {
    let doctor_map = new window.google.maps.Map(
      document.getElementById("doctor-geo"),
      {
        center: {
          lat: 40.7593941,
          lng: -73.96977950000002
        },
        zoom: 8,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP
      }
    );

    let marker = new window.google.maps.Marker({
      position: {
        lat: 40.7593941,
        lng: -73.96977950000002
      },
      map: doctor_map
    });
  }

  render() {
    return (
      <div id="doctor-geo" className="map-container">
        {this.doctor_geo}
      </div>
    );
  }
}
