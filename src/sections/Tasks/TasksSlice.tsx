import { createSlice } from "@reduxjs/toolkit";

export const TasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		list: []
	},
	reducers: {
		updateTaskList: (state, action) => {			
			return {list: action.payload};
		}
	}
})

export const { updateTaskList } = TasksSlice.actions

// fake data 
function generateMockData() {
	let data:Object[] = [];
	data.push({name:'Do Lab 3', description:'prolly would need 3 hours (ah who am I kidding make that 9).'});
	data.push({name: 'Revise for Midterms', description: 'gg bellcurve-god save me.'});
	data.push({name: 'Prepare for CCA meeting on Friday', description: 'best not to show up empty-handed.'});

	return data;
}

export default TasksSlice.reducer;