import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
	state = {
		employees: [
		  {
	        name: 'Charlie',
	        job: 'Janitor',
	      },
	      {
	        name: 'Mac',
	        job: 'Bouncer',
	      },
	      {
	        name: 'Dee',
	        job: 'Aspring actress',
	      },
	      {
	        name: 'Dennis',
	        job: 'Bartender',
	      },
		],
	}

	removeEmployee = (index) => {
		const {employees} = this.state

		this.setState({
			employees: employees.filter((employee, i) => {
				return i !== index
			}),
		})
	}

	handleSubmit = (employee) => {
		this.setState({employees: [...this.state.employees, employee]})
	}

	render() {
		const {employees} = this.state

		return (
			<div className = "container">
				<Table employees={employees} removeEmployee={this.removeEmployee}/>
				<Form handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}



export default App