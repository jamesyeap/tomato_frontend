import { Grid, Checkbox, IconButton, Typography, Stack, Button, TextField } from "@mui/material";
import { useState } from "react";

import Category from "../Category/Category";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DeletableCategory from "../Category/DeletableCategory";

interface TaskProps {
	name:string,
	description?:string,
}

export default function Task(props:TaskProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	const [name, setName] = useState(props.name);
	const [description, setDescription] = useState(props.description);

	// handles control of "name" field of Task in editing mode
	const handleChangeName = (e:any) => {
		setName(e.target.value);
	} 

	// handles control of "description" field of Task in editing mode
	const handleChangeDescription = (e:any) => {
		setDescription(e.target.value);
	} 

	// handles completion of Tasks
	const handleComplete = () => {
		// TODO
	}

	// handles deletion of Tasks
	const handleDelete = () => {
		// TODO
	}

	// handles editing of Tasks
	const handleStartEdit = () => {
		// TODO
		setIsEditing(true);
		setIsExpanded(false);
	}
	const handleDiscardEdit = () => {
		// TODO
		setIsEditing(false);
	}
	const handleSaveEdit = () => {
		// TODO
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
						? <TextField variant="outlined" fullWidth={true} multiline={true} sx={{width: 400, bgcolor:'#F4F6FA'}} value={name} onChange={handleChangeName} />
						: <Typography variant="h6" sx={{fontWeight: 'bold', color: '#646871', width: 400, borderRadius: 5, padding: 1}}>{props.name}</Typography>
					}
				</Grid>
				
				<Grid item>
					<Stack>
						{/* Button-Group with "COMPLETE", "EDIT" and "DELETE" functions */}
						{!isEditing 
							? (<Grid container>
								<Grid item>
									<Checkbox />
								</Grid>

								<Grid item>
									<IconButton onClick={handleStartEdit}>
										<EditIcon />
									</IconButton>
								</Grid>

								<Grid item>
									<IconButton>
										<DeleteOutlineIcon />
									</IconButton>
								</Grid>
							</Grid>)
							: (<Grid container>
								<Grid item>
									<IconButton>
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
				? (<Grid container><DeletableCategory name="category 1"/></Grid>)
				: (<Grid container><Category name="category 1"/></Grid>)
			}
		</Grid>
	</Grid>
	)
}
