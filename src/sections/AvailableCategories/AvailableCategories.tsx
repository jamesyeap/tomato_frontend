import { Grid, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { CategoryProps } from '../../components/Category/Category';

import SelectableCategory from '../../components/Category/SelectableCategory';
import { fetchCategories_API } from './CategoriesAPI';

export default function AvailableCategories() {
	const { isLoading, error, data } = useQuery('categories', fetchCategories_API);

	if (!isLoading) {
		if (data) {
			return (
				<Grid
				container
				alignItems="center"
				direction="column"
				spacing={5}
				>
					<Grid item>
						<Typography variant="h6">All Categories</Typography>
					</Grid>

					{data.data.map((c:CategoryProps) => (
						<Grid item>
							<SelectableCategory category={c} />
						</Grid>
					))
					}
				</Grid>
			)
		} else {
			return (
				<Grid container>
					<Grid item>
						<Typography variant="h3">No categories created yet.</Typography>
					</Grid>
				</Grid>
			)
		}
	} else if (error) {
		// TODO: add error screen
		return (
			<Grid container>
				<Grid item>
					<Typography variant="h3">An error occurred.</Typography>
				</Grid>
			</Grid>
		)
	} else {
		// TODO: add loading screen
		return (
			<Grid container>
				<Grid item>
					<Typography variant="h3">Loading...</Typography>
				</Grid>
			</Grid>
		)
	}
}