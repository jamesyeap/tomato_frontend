import { Chip } from "@mui/material";

export interface DeselectableCategoryProps {
	name:string
}

export default function DeselectableCategory(props:DeselectableCategoryProps) {
	const handleDeselect = () => {
		// TODO
	}

	return (
		<Chip 
		label="category 1" 
		onDelete={handleDeselect} 
		color="primary"
		size="small"/>
	)
}