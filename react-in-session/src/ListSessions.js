import { useState } from "react";
import axios from "axios";

export default function ListSessions() {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({...values, [name]: value}));
	}

		const handleSubmit = (event) => {
			event.preventDefault();

			console.log(inputs);
		}
	return (
		<div>
			<h2> List Sessions</h2>
			
		</div>
	)

}