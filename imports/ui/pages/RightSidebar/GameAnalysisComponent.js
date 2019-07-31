import React, { Component } from 'react';

export default class GameAnalysisComponent extends Component{

constructor(props) {
    super(props);
  }
render(){
	return (
    <a href="#">
      <span style={this.props.CssManager.gameAnalysisIcon()} />
   </a>
  );
}
}

