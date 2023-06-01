import React, { Componenet } from 'react';
import { useState, useEffect, initialState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListSessions() {
	//const navigate = useNavigate();
const [sessions, setSessions] = useState([]);
useEffect(() =>{
	getSessions();
}, []);

function getSessions() {
	axios.get('http://192.168.1.15/api/')
		.then(function(response){
			if (response.data.error){
				console.log("Error while getting data.");
			}else{
				console.log((response.data));
				setSessions(response.data);
				//setSessions(response.data);
				//res = JSON.parse(response.data);
				// navigate('/');
			}
		});
}


	return (
		<div>
			<h1> Viewing All Sessions</h1>
			<table class="sessionDataTable">
				<thead>
				<tr>
					<th>Session Title</th>
					<th>Room</th>
					<th>Start Time</th>
					<th>End Time</th>
				</tr>
				</thead>
				<tbody>
				 {sessions.map((session, key) => 
					<tr key={session.session_id}>
					 	<td>{session.title}</td>
					 	<td>{session.room}</td>
					 	<td>{session.startTime}</td>
					 	<td>{session.endTime}</td>
					</tr>
				 	)}
				</tbody>
			</table>
		</div>
	)

}