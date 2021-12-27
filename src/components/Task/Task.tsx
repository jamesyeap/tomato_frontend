import { Grid, Checkbox, IconButton, Typography, Stack, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import Category from "../Category/Category";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import UntaggableCategory from "../Category/UntaggableCategory";

import { 
	markComplete_API, 
	markIncomplete_API,
	updateTask_API,
	deleteTask_API,
} from '../../sections/Tasks/TasksAPI';
interface TaskProps {
	id:number,
	title:string,
	description?:string,
	category_id?: number,
	category_name?:string,
	deadline?:string,
	completed:boolean,
	created_at:string,
	updated_at:string
}

export default function Task(props:TaskProps) {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const [title, setTitle] = useState<string>(props.title);
	const [description, setDescription] = useState<string | undefined>(props.description);
	const [categoryID, setCategoryID] = useState<number | undefined>(props.category_id);
	const [checked, setChecked] = useState<boolean>(props.completed);

	// keeps tasks shown to the user in-sync with the database
	const queryClient = useQueryClient();

	// handles control of "name" field of Task in editing mode
	const handleChangeTitle = (e:any) => {
		setTitle(e.target.value);
	} 

	// handles control of "description" field of Task in editing mode
	const handleChangeDescription = (e:any) => {
		setDescription(e.target.value);
	}

	// handles marking of Task as complete and incomplete
	const handleChangeCheckbox = (e:any) => {
		if (e.target.checked === true) {
			markComplete();
		} else {
			markIncomplete();
		}

		setChecked(e.target.checked);
	}

	// mark Task as complete
	const markComplete = () => {
		markComplete_API(props.id);
	}
	// marks a completed Task as incomplete
	const markIncomplete = () => {
		markIncomplete_API(props.id);
	}

	// handles deletion of Tasks
	const mutateDelete = useMutation(deleteTask_API, {
		onSuccess: () => {
			queryClient.invalidateQueries('tasks');
		}
	});
	const handleDelete = () => {
		mutateDelete.mutate(props.id);
	}

	// handles editing of Tasks
	const mutateUpdate = useMutation(updateTask_API, {
		onSuccess: () => {
			queryClient.invalidateQueries('tasks');
			setIsEditing(false);
		}
	});
	const handleStartEdit = () => {
		// TODO
		setIsEditing(true);
		setIsExpanded(false);
	}
	const handleDiscardEdit = () => {
		// reset state to initial values
		setTitle(props.title);
		setDescription(props.description);
		setCategoryID(props.category_id);

		setIsEditing(false);
	}
	const handleSaveEdit = () => {
		mutateUpdate.mutate({
			id: props.id,
			title: title,
			description: description,
			deadline: props.deadline,
			category_id: props.category_id
		})
	}

	// handles expansion and minimizing of Tasks
	const handleExpand = () => {
		setIsExpanded(true);
	}
	const handleMinimize = () => {
		setIsExpanded(false);
	}

	return (
	<Grid 
	container 
	direction='column' 
	justifyContent='center' 
	alignItems='flex-start' 
	spacing={1}
	borderRadius={2}
	bgcolor='white'
	width={600}
	padding={2}
	>
		<Grid item>
			<Grid
			container
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			width={550}
			>
				
				<Grid item>
					{isEditing
						? <TextField variant="outlined" fullWidth={true} multiline={true} sx={{width: 400, bgcolor:'#F4F6FA'}} value={title} onChange={handleChangeTitle} />
						: <Typography variant="h6" sx={{fontWeight: 'bold', color: '#646871', width: 400, borderRadius: 5, padding: 1}}>{props.title}</Typography>
					}
				</Grid>
				
				<Grid item>
					<Stack>
						{/* Button-Group with "COMPLETE", "EDIT" and "DELETE" functions */}
						{!isEditing 
							? (<Grid container>
								<Grid item>
									<Checkbox checked={checked} onClick={handleChangeCheckbox} />
								</Grid>

								<Grid item>
									<IconButton onClick={handleStartEdit}>
										<EditIcon />
									</IconButton>
								</Grid>

								<Grid item>
									<IconButton onClick={handleDelete}>
										<DeleteOutlineIcon />
									</IconButton>
								</Grid>
							</Grid>)
							: (<Grid container>
								<Grid item>
									<IconButton onClick={handleSaveEdit}>
										<SaveAsIcon />
									</IconButton>
								</Grid>

								<Grid item>
									<IconButton onClick={handleDiscardEdit}>
										<HighlightOffIcon />
									</IconButton>
								</Grid>
							</Grid>)
						}

						{!isEditing 
							? isExpanded
						 		? (<Button variant="outlined" startIcon={<ExpandLessIcon/>} size="small" onClick={handleMinimize}>Less</Button>)
						 		: (<Button variant="outlined" startIcon={<ExpandMoreIcon />} size="small" onClick={handleExpand}>More</Button>)
							: null
						}
					</Stack>
				</Grid>
			</Grid>
		</Grid>

		<Grid item>
			{isEditing
				? <TextField variant="outlined" fullWidth={true} multiline={true} sx={{width: 530, bgcolor:'#F4F6FA'}} value={description} onChange={handleChangeDescription} />
				: isExpanded
					? (<Typography variant="body2" paragraph={true} sx={{color: '#A9ACAD'}}>{props.description}</Typography>)
					: null
			}
		</Grid>
		
		<Grid item>
			{isEditing
				? (props.category_name) 
					? (<Grid container><UntaggableCategory category_name={props.category_name} handleUntag={() => setCategoryID(undefined)} /></Grid>)
					: (<Grid container><Category category_name="unassigned" /></Grid>)
				: (<Grid container><Category category_name={props.category_name ? props.category_name : "unassigned"} /></Grid>)
			}
		</Grid>
	</Grid>
	)
}
