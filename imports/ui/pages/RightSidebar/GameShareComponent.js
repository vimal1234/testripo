import React, { Component } from 'react';

export default class GameShareComponent extends Component{

constructor(props) {
    super(props);
  }
render(){
	return (
    <a href="#">
      <span style={this.props.CssManager.gameShareIcon()} />
	  	{/* <img src="images/share-icon-gray.png" alt="" / */}>
   </a>
  );
}
}
