// functions to make API calls to backend
import axios from "axios";

var config = {
    headers: {'Content-Type': 'application/json'}
};

export const fetchTasks_API = () => {
	return axios.get("https://tomato-backend-api.herokuapp.com/alltasks", config);
}