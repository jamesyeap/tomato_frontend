import { Chip } from "@mui/material";

export interface UntaggableCategoryProps {
	category_name:string,
	handleUntag:any
}

export default function UntaggableCategory(props:UntaggableCategoryProps) {
	return (
		<Chip 
		label={props.category_name}
		onDelete={props.handleUntag} 
		color="primary" 
		size="small"/>
	)
}