// functions to make API calls to backend
import axios from "axios";
interface UpdateTaskAPIParams {
	id:number,
	title:string,
	description?:string,
	deadline?:string,
	category_id?:number
}

export const fetchTasks_API = () => {
	return axios.get(
		"https://tomato-backend-api.herokuapp.com/alltasks"
		);
}

export const fetchTaskByID_API = (id:number) => {
	return axios.post(
		"https://tomato-backend-api.herokuapp.com/gettask",
		{ id: id }
	);
}

export const markComplete_API = (id:number) => {
	return axios.post(
		"https://tomato-backend-api.herokuapp.com/completetask",
		{ id: id }
	);
}

export const markIncomplete_API = (id:number) => {
	return axios.post(
		"https://tomato-backend-api.herokuapp.com/incompletetask",
		{ id: id }
	);
}

export const updateTask_API = (params:UpdateTaskAPIParams) => {
	return axios.post(
		"https://tomato-backend-api.herokuapp.com/updatetask",
		JSON.stringify(params)
		)
}

export const deleteTask_API = (id:number) => {
	return axios.post(
		"https://tomato-backend-api.herokuapp.com/deletetask",
		{id: id}
	);
}

