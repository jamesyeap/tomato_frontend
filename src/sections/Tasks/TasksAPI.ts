// functions to make API calls to backend
import axios from "axios";

export const fetchTasks_API = () => {
	return axios.get(
		"https://tomato-backend-api.herokuapp.com/alltasks");
}

export const markComplete_API = (id:number) => {
	console.log(id);

	return axios.post(
		"https://tomato-backend-api.herokuapp.com/completetask",
		String(id),
		{
			headers: { 'Content-Type': 'text/plain '}
		}
	);
}

export const markIncomplete_API = (id:number) => {

	return axios.post(
		"https://tomato-backend-api.herokuapp.com/incompletetask",
		String(id),
		{
			headers: { 'Content-Type': 'text/plain '}
		}
	);
}

