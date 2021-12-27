/* Section that holds all tasks */

import { Grid, Typography } from '@mui/material';
import { useQuery } from 'react-query'
import Task from '../../components/Task/Task'

import { fetchTasks_API } from './TasksAPI';

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
								id={t.id}
								title={t.title}
								description={t.description}
								category={t.category}
								category_id={t.category_id}
								deadline={t.deadline}
								completed={t.completed}
								created_at={t.created_at}
								updated_at={t.updated_at}
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