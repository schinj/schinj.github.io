import React, {Component} from 'react'
import gameStyle from "./tictactoe.module.css"

function Square(props) {
  return (
    <div className={gameStyle.square} onClick={props.onClick}>
      {props.value}
    </div>
  );
}

class Board extends Component {
	renderSquare(i) {
		return <Square value={this.props.squares[i]} onClick={() => {this.props.onClick(i)}}/>;
	}

	render() {
		return (
			<div>
				<div className={gameStyle.boardRow}>
		          {this.renderSquare(0)}
		          {this.renderSquare(1)}
		          {this.renderSquare(2)}
		        </div>
		        <div className={gameStyle.boardRow}>
		          {this.renderSquare(3)}
		          {this.renderSquare(4)}
		          {this.renderSquare(5)}
		        </div>
		        <div className={gameStyle.boardRow}>
		          {this.renderSquare(6)}
		          {this.renderSquare(7)}
		          {this.renderSquare(8)}
		        </div>
			</div>
		)
	}
}

export default Board