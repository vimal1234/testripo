import React, { Component } from 'react';

class ActionComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
  <div className="draw-section">
    <ul>
      {/* 
		Take back request Component
		Player can request to take back the last move to the
		opponent Player. 
		*/}
      <li>
        <a href="#" title="TakeBack">
          <span style={this.props.CssManager.actionButtonImage("takeback")} />TakeBack
        </a>
      </li>
      {/* 
		Draw request Component
		Player can draw arrow and circle on the board.
		*/}
      <li>
        <a href="#" title="Draw">
          <span style={this.props.CssManager.actionButtonImage("draw")}>
         </span>
          Draw
        </a>
      </li>
      {/*
							Resign Component
							Players can resign the game.
							*/}

      <li>
        <a href="#" title="Resign">
          <span style={this.props.CssManager.actionButtonImage("resign")}>
            </span>
          Resign
        </a>
      </li>
      {/* 
						Game abort Component
						Players can abort the game. */}

      <li>
        <a href="#" title="Abort">
          <span style={this.props.CssManager.actionButtonImage("abort")}>
	        </span>
          Abort
        </a>
      </li>
    </ul>
  </div>
);
	}
}
export default ActionComponent;
