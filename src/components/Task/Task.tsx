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
					<Typography variant="h4" sx={{fontWeight: 'bold', color: '#646871'}}>Task 1</Typography>
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
			{isExpanded && (<Typography variant="body2" paragraph={true} sx={{color: '#A9ACAD'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat iaculis urna, maximus luctus sem faucibus quis. Aliquam porta dui sed diam ornare, eget pulvinar urna egestas. Suspendisse non porttitor augue. Nullam at lobortis magna. In eget purus at neque malesuada accumsan. Suspendisse potenti. Maecenas efficitur interdum libero, blandit ullamcorper urna fringilla quis. Pellentesque ut augue mollis ex suscipit finibus nec at orci. Maecenas consequat massa lacus, eu placerat purus hendrerit vel. </Typography>)}
		</Grid>

		<Grid item>
			<Grid container><Category name="category 1"/></Grid>
		</Grid>
	</Grid>
	)
}
