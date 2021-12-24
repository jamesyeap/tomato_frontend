/* Section that holds all tasks */
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store';
import { Button, Grid } from '@mui/material';
import { useQuery } from 'react-query'
import Task from '../../components/Task/Task'

import { fetchTasks_API } from './TasksAPI';
import { updateTaskList, fetchAllTasksAsync } from '../../sections/Tasks/TasksSlice';

export default function Tasks() {
	const tasksList:any[] = useSelector((state:RootState) => state.tasks.list); 
	const dispatch = useDispatch();
	
	const { isLoading, error, data } = useQuery('tasks', fetchTasks_API);
	if (!isLoading && !error) {		
		if (data) {			
			dispatch(updateTaskList(( data.data )));
		} else {
			dispatch(updateTaskList(( [] )));
		}
	}

	// mock fetch
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
				<Button onClick={handleFetchTasks}>Mock Fetch Tasks</Button>
			</Grid>

			{tasksList.map((t:any) => (
				<Grid item>
					<Task
					id={t.Id}
					title={t.Title}
					description={t.Description}
					category={t.Category}
					deadline={t.Deadline}
					created_at={t.Created_at}
					updated_at={t.Updated_at}				
					/>
				</Grid>
			))}
		</Grid>
	)
}