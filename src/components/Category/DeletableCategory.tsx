import { Chip } from "@mui/material";

export interface DeletableCategoryProps {
	name:string,
}

export default function DeletableCategory(props:DeletableCategoryProps) {
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