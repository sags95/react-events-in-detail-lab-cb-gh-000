// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{
  onReceiveCoordinates = (event) => {
  event.persist(event);

      var coords = [];
      var xPos = event.clientX;
      var yPos = event.clientY;

      coords.push(xPos);
      coords.push(yPos);




  }



  render(){
    return(
      <button onClick={this.onReceiveCoordinates}>Coords</button>
    )
  }
}
