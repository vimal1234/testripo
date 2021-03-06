import React, { Component } from 'react';
import '../css/ChessBoard';
import Players from './Players';
import Clock from './ClockComponent';
import PieceSquare from '../components/Board/PieceSquare';
import RankSquare from '../components/Board/RankSquare';
import FileSquare from '../components/Board/FileSquare';
import Board from '../components/Board/Board';
import '../css/developmentboard.css';
import Chess from 'chess.js';
import CssManager from '../components/Css/CssManager';

const css = new CssManager('developmentcss');

export default class MiddleBoard extends Component {
	constructor(props) {
		super(props);

		this._circle = { lineWidth: 2, color: 'red' };

		this.state = {
			draw_rank_and_file: 'tl',
			top: 'b'
		};
	}

	/**
   * Calculate & Update state of new dimensions
   */
	updateDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	/**
   * Add event listener
   */
	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions.bind(this));
	}

	/**
   * Remove event listener
   */
	componentWillUnMount() {
		window.removeEventListener('resize', this.updateDimensions.bind(this));
	}

	static renderUnknown(what) {
		return <div>{what} is unknown</div>;
	}

	switchSides = () => {
		const newTop = this.state.top === 'w' ? 'b' : 'w';
		this.setState({ top: newTop });
	};

	switchRAF = () => {
		this.setState({ draw_rank_and_file: this.nextRAF()[0] });
	};

	circleLineWidthChange = event => {
		this._circle.lineWidth = event.target.value;
		this.refs.board.setCircleParameters(this._circle.lineWidth, this._circle.color);
	};

	circleColorChange = event => {
		this._circle.color = event.target.value;
		this.refs.board.setCircleParameters(this._circle.lineWidth, this._circle.color);
	};

	nextRAF() {
		const values = ['tl', 'tr', 'bl', 'br', 'stl', 'str', 'sbl', 'sbr'];
		const texts = [
			'Top left',
			'Top right',
			'Bottom left',
			'Bottom right',
			'External top left',
			'External top right',
			'External bottom left',
			'External bottom right'
		];

		if (!this.state.draw_rank_and_file) return [values[0], texts[0]];
		let i = values.indexOf(this.state.draw_rank_and_file);
		i++;
		if (i === values.length) return [null, 'No rank and file'];
		else return [values[i], texts[i]];
	}

	render() {
		let chess = new Chess.Chess('r1br1k2/pp1p1p2/2n1pp1p/2P5/2P5/2P1PN2/P4PPP/2KR1B1R b - - 2 1');
		let w = this.state.width;
		let h = this.state.height;

		if (!w) w = window.innerWidth;
		if (!h) h = window.innerHeight;

		w /= 2;

		const size = Math.min(h, w);

		const newColor = this.state.top === 'w' ? 'Black' : 'White';
		const raf = this.nextRAF()[1];

		return (
      <div>
        <div className="board-player-top">
          <img
            className="user-pic"
            src="../../../../../images/player-img-top.png"
            alt=""
            title=""
          />
          <div className="board-player-userTagline">
            <Players
              CssManager={css}
              playerInfo={"John smith"}
              rating={"1550"}
            />
            <div className="clock-top">
              {/* Here is time comes from live server response and bind in props component   */}
              <Clock CssManager={css} time={1500} />
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ id: "board-left", float: "left", width: w, height: h }}>
            <Board
              cssmanager={css}
              board={chess.board()}
              draw_rank_and_file={this.state.draw_rank_and_file}
              side={size}
              top={this.state.top}
              circle={{ lineWidth: 2, color: "red" }}
              arrow={{ lineWidth: 2, color: "blue" }}
              ref="board"
            />
          </div>
          <div
            style={{ id: "board-right", float: "left", width: w, height: h }}
          >
            <button onClick={this.switchSides}>{newColor} on top</button>
            <button onClick={this.switchRAF}>{raf}</button>
            <p>Color on top: {this.state.top}</p>
            <p>Rank and file: {this.state.draw_rank_and_file}</p>
            <p>
              Circle width:{" "}
              <input
                id="circlewidth"
                type="number"
                name="quantity"
                min="1"
                max="50"
                onChange={this.circleLineWidthChange}
              />
            </p>
            <p>
              Circle color:{" "}
              <select id="circlecolor" onChange={this.circleColorChange}>
                <option value="red">Red</option>
                <option value="green">Green</option>
              </select>
            </p>
          </div>
        </div>
        <div className="board-player-bottom">
          <img
            className="user-pic"
            src="../../../images/player-img-bottom.png"
            alt=""
            title=""
          />
          <div className="board-player-userTagline">
            <Players CssManager={css} playerInfo={"Morris"} rating={"750"} />
            <div className="clock-bottom active">
              {/* Here is time comes from live server response and bind in props component   */}
              <Clock CssManager={css} time={25000} />
            </div>
          </div>
        </div>
      </div>
    );
	}
}
