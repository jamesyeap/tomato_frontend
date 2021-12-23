import { Grid, Checkbox, IconButton, Typography, Stack, Button } from "@mui/material";
import { useState } from "react";

import Category from "../Category/Category";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface TaskProps {
	name:string,
	description?:string,
}

export default function Task(props:TaskProps) {
	const [isExpanded, setIsExpanded] = useState(false);

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
	maxWidth={500}
	padding={2}
	>
		<Grid item>
			<Grid 
			container
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			// spacing={5}
			xs='auto'
			>
				<Grid item>
					<Typography variant="h6" sx={{fontWeight: 'bold', color: '#646871'}}>{props.name}</Typography>
				</Grid>

				<Grid item>
					<Stack marginLeft={25}>
						{/* Button-Group with "COMPLETE", "EDIT" and "DELETE" functions */}
						<Grid container>
							<Grid item>
								<Checkbox />
							</Grid>

							<Grid item>
								<IconButton>
									<EditIcon />
								</IconButton>
							</Grid>

							<Grid item>
								<IconButton>
									<DeleteOutlineIcon />
								</IconButton>
							</Grid>
						</Grid>

						{isExpanded
						 ? (<Button variant="outlined" startIcon={<ExpandLessIcon/>} size="small" onClick={handleMinimize}>Less</Button>)
						 : (<Button variant="outlined" startIcon={<ExpandMoreIcon />} size="small" onClick={handleExpand}>More</Button>)
						}
					</Stack>
				</Grid>
			</Grid>
		</Grid>

		<Grid item>
			{isExpanded && (<Typography variant="body2" paragraph={true} sx={{color: '#A9ACAD'}}>{props.description}</Typography>)}
		</Grid>

		<Grid item>
			<Grid container><Category name="category 1"/></Grid>
		</Grid>
	</Grid>
	)
}
