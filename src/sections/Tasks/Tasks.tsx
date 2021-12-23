/* Section that holds all tasks */
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store';
import { Button, Grid } from '@mui/material';
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
		<Grid
		container
		spacing={2}
		direction="column"
		alignItems="center"
		sx={{bgcolor: '#F4F6FA', minHeight: '90vh'}}
		>
			<Grid item>
				<Button onClick={handleFetchTasks}>Fetch Tasks</Button>
			</Grid>

			{tasksList.map((t:any) => (
				<Grid item><Task name={t.name} description={t.description} /></Grid>
			))}
		</Grid>
	)
}