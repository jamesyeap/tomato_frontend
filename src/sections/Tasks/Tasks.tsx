/* Section that holds all tasks */

import { Grid, Typography } from '@mui/material';
import { useQuery } from 'react-query'
import Task from '../../components/Task/Task'

import { fetchTasks_API } from './TasksAPI';
import { updateTaskList } from '../../sections/Tasks/TasksSlice';

export default function Tasks() {
	const { isLoading, error, data } = useQuery('tasks', fetchTasks_API);
	if (!isLoading) {		
		if (data) {		
			console.log(data.data);	
			
			return (
				<Grid
				container
				spacing={2}
				direction="column"
				alignItems="center"
				sx={{bgcolor: '#F4F6FA', minHeight: '90vh'}}
				>
					{data.data.map((t:any) => (
							<Grid item>
								<Task
								id={t.Id}
								title={t.Title}
								description={t.Description}
								category={t.Category}
								deadline={t.Deadline}
								completed={t.Completed}
								created_at={t.Created_at}
								updated_at={t.Updated_at}				
								/>
							</Grid>
					))}
				</Grid>
			)
		} else {
			// TODO: make error page
			return (
				<Grid container>
					<Grid item>
						<Typography variant="h3">An error occurred.</Typography>
					</Grid>
				</Grid>
			)
		}
	} else if (!error) {
		// TODO: make loading page
		return (
			<Grid container>
				<Grid item>
					<Typography variant="h3">Loading...</Typography>
				</Grid>
			</Grid>
		)
	} else {
		// TODO: make error page
		return (
			<Grid container>
				<Grid item>
					<Typography variant="h3">An error occurred.</Typography>
				</Grid>
			</Grid>
		)
	}
}