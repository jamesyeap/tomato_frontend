import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { useQuery } from 'react-query'

export const TasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		list: []
	},
	reducers: {
		updateTaskList: (state, action) => {
			// placeholder mock
			return {list: action.payload};

			// TODO: put actual data-fetching logic here
		}
	}
})

export const { updateTaskList } = TasksSlice.actions

const fetchTasks_API = () => {
	// TODO: return a Promise 
}

// thunks: use this form for functions with asynchronous calls
export const fetchAllTasksAsync = () => (dispatch:Dispatch) => {
	const info = useQuery('tasks', fetchTasks_API);

	// mock fetch
	setTimeout(() => {
		dispatch(updateTaskList(generateMockData()));
	}, 1000);
}

// fake data 
function generateMockData() {
	let data:Object[] = [];
	data.push({name:'Do Lab 3', description:'prolly would need 3 hours (ah who am I kidding make that 9).'});
	data.push({name: 'Revise for Midterms', description: 'gg bellcurve-god save me.'});
	data.push({name: 'Prepare for CCA meeting on Friday', description: 'best not to show up empty-handed.'});

	return data;
}

export default TasksSlice.reducer;