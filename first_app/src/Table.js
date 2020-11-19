import React, {Component} from 'react'

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
			</tr>
		</thead>	
	)
}

const TableBody = (props) => {
	const rows = props.employees.map((row, index) => {
		return (
			<tr key={index}>
			<td>{row.name}</td>
			<td>{row.job}</td>
			<td>
				<button onClick={() => props.removeEmployee(index)}>Delete</button>
			</td>
			</tr>
		)

	})

	return <tbody>{rows}</tbody>
}

class Table extends Component {
	render() {
		const {employees, removeEmployee} = this.props

		return (
			<table>
				<TableHeader />
				<TableBody employees={employees} removeEmployee={removeEmployee}/>
			</table>
		)
	}
}

export default Table