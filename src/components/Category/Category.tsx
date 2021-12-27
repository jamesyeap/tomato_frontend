import { Chip } from "@mui/material";

export interface CategoryProps {
	name?:string
}

export default function Category(props:CategoryProps) {
	return (
		<Chip 
			label={props.name ? props.name : "unassigned"} 
			color="primary" 
			size="small"
		/>
	)
}