import React, {Component} from 'react'
import App from './first_app/App'
import TicTacToe from './tutorial_tictactoe/TicTacToe'

class Home extends Component {
	render() {
		return (
			<div align="center">
			<h1>Sachin Jangra</h1>
			<h2>Hello, I am learning React.</h2>
			<br/>
			<TicTacToe />
			</div>
		)
	}
}

export default Home