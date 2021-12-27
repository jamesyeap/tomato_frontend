import axios from "axios";

export const fetchCategories_API = () => {
	return axios.get(
		"https://tomato-backend-api.herokuapp.com/allcategories"
		);
}