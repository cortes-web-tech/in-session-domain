import React, { Componenet } from 'react';
import { useState, useEffect, initialState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListSessions() {
	//const navigate = useNavigate();
var res;
const [state, setState] = useState(initialState);
//	state = {
//		sessions: []

//	}
	axios.get('http://192.168.1.15/api/')
		.then(function(response){
			if (response.data.error){
				console.log("Error while getting data.");
			}else{
				console.log(response.data);
				//res = JSON.parse(response.data);
				// navigate('/');
			}
		});

/*
	state = {
		courses: []
	}

	constructor() {
		super();
		//api.get('/index.php').then(res => {
		//	console.log(res.data);
		//});
	}
*/

	const getSessions = async () => {

		
		
	
	
/*
		try{
			const url = "http://192.168.1.15/api";
		const  response = await axios(url);
		} catch (error) {

		}
		
		Axios.get('http://localhost:80/api/')
		.then(function(response){
			if (response.data.error){
				console.log("Error while getting data.");
			}else{
				console.log(response.data);
				navigate('/');
			}
		}); */
	}
/*
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({...values, [name]: value}));
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
		}

	
	

		console.log(inputs);

		useEffect(() => {
			getUsers();
		}, [])
*/
	return (
		<div>
			<h2> List Sessions</h2>
			
		</div>
	)

}