
import React, { Component } from 'react';

export default class GameSheetDownloadComponent extends Component{

constructor(props) {
    super(props);
  }
render(){
	return (
    <a href="#">
		  <span style={this.props.CssManager.gameSheetDownloadIcon()} />
	</a>
  );
}
}

