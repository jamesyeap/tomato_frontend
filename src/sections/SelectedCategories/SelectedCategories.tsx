/* Section that displays filtering criteria based on categories */
import { Grid, Typography } from '@mui/material';
import { useContext } from "react";
import { Context } from "../../App";

import DeselectableCategory from '../../components/Category/DeselectableCategory';

export default function SelectedCategories() {
	const appContext = useContext(Context);

	return (
		<Grid
		container
		alignItems="center"
		sx={{minHeight: '3vh', width:' 60vw', margin: 2}}
		spacing={5}
		>
			<Grid item>
				<Typography variant="h6">Selected Categories: </Typography>
			</Grid>

			{appContext?.selectedCategory
				? (<Grid item>
					<DeselectableCategory category_name={appContext.selectedCategory.category_title} />
				</Grid>)
				: (null)
			}
		</Grid>
	)
}