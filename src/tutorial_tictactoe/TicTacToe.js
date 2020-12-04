import React, {Component} from 'react'
import Board from './Board'
import gameStyle from "./tictactoe.module.css"

class TicTacToe extends Component {
	constructor(props) {
		super(props)

		this.state = {
			history: [{
				squares: Array(9).fill(null),
			}],
			stepNumber: 0,
			isXNext: true
		}
	}

	handleClick = (i) => {
    	const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const squares = history[history.length-1].squares.slice();
	    if (calculateWinner(squares) || squares[i]) {
	      return;
	    }
	    squares[i] = this.state.isXNext ? 'X' : '0';
	    const historyNew = history.concat({'squares': squares});
	    this.setState({
	    	history: historyNew,
	    	stepNumber: history.length,
	    	isXNext: !this.state.isXNext,
	    });
	}

	jumpTo(step) {
	    this.setState({
	      stepNumber: step,
	      xIsNext: (step % 2) === 0,
	    });
	  }

	render() {
		const history = this.state.history;
    	const current = history[this.state.stepNumber];
	    const winner = calculateWinner(current.squares);

	    const moves = history.map((step, move) => {
	      const desc = move ?
	        'Go to move #' + move :
	        'Go to game start';
	      return (
	        <li key={move}>
	          <button onClick={() => this.jumpTo(move)}>{desc}</button>
	        </li>
	      );
	    });

	    let status;
	    if (winner) {
	      status = 'Winner: ' + winner;
	    } else {
	      status = 'Next player: ' + (this.state.isXNext ? 'X' : 'O');
	    }	    

		return (
			<div style={{display: `block`}}>
		        <div>
					<Board 
						squares={current.squares} 
				  		isXNext={this.state.isXNext} onClick = {this.handleClick}
					/>
		        </div>
		        <div>
		          <div>{status}</div>
		          <ol>{moves}</ol>
		        </div>
	      	</div>
		)
	}
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe