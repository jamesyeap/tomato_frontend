/* Section that holds all tasks */

import { Grid, Typography } from '@mui/material';
import { useQuery } from 'react-query'
import { useEffect } from 'react';

import { CategoryProps } from '../../components/Category/Category';
import Task from '../../components/Task/Task'
import { fetchTaskByCategoryID_API, fetchTasks_API } from './TasksAPI';

export enum Filter {
	None,
	CategoryOnly,
	CompletedOnly,
	CategoryAndCompleted
}
interface TasksParams {
	currFilter: Filter,
	selectedCategory: CategoryProps|null
}

export default function Tasks(props:TasksParams) {
	let selectedFunc_API;
	
	switch (props.currFilter) {
		case Filter.CategoryOnly:
			selectedFunc_API = () => fetchTaskByCategoryID_API(props.selectedCategory ? props.selectedCategory.category_id : -1);
			break;
		case Filter.CompletedOnly:
			selectedFunc_API = fetchTasks_API;
			break;
		case Filter.CategoryAndCompleted:
			selectedFunc_API = () => fetchTaskByCategoryID_API(props.selectedCategory ? props.selectedCategory.category_id : -1);
			break;
		default:
			selectedFunc_API = fetchTasks_API;
	}

	const { isLoading, error, data } = useQuery('tasks', selectedFunc_API);
	
	if (!isLoading) {		
		if (data) {					
			return (
				<Grid
				container
				spacing={2}
				direction="column"
				alignItems="center"
				sx={{bgcolor: '#F4F6FA', minHeight: '90vh', width: '60vw'}}
				>
					{data.data 
						? data.data.map((t:any) => (
							<Grid item>
								<Task
								id={t.id}
								title={t.title}
								description={t.description}
								category_name={t.category}
								category_id={t.category_id}
								deadline={t.deadline}
								completed={t.completed}
								created_at={t.created_at}
								updated_at={t.updated_at}
								/>
							</Grid>
					))
						: <Grid item>No todos</Grid>

					}
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