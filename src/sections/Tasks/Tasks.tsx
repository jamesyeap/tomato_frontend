/* Section that holds all tasks */
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store';
import { Button, Stack } from '@mui/material';
import Task from '../../components/Task/Task'

import { fetchAllTasksAsync } from '../../sections/Tasks/TasksSlice';

export default function Tasks() {
	const tasksList:any[] = useSelector((state:RootState) => state.tasks.list); 
	console.log(tasksList);
	const dispatch = useDispatch();
	
	const handleFetchTasks = () => {
		dispatch(fetchAllTasksAsync());
	}

	return (
		<Stack
		sx={{bgcolor: '#F4F6FA', borderRadius: 5}}
		spacing={2}
		>
			<Button onClick={handleFetchTasks}>Fetch Tasks</Button>

			{tasksList.map((t:any) => (
				<Task name={t.name} description={t.description} />
			))}
		</Stack>
	)
}