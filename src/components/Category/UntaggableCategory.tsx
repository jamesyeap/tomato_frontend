import { Chip } from "@mui/material";

export interface UntaggableCategoryProps {
	name:string,
}

export default function UntaggableCategory(props:UntaggableCategoryProps) {
	const handleDelete = () => {
		// TODO
	}

	return (
		<Chip 
		label={props.name}
		onDelete={handleDelete} 
		color="primary" 
		size="small"/>
	)
}