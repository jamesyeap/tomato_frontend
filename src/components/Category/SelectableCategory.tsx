import { Chip } from "@mui/material";

export interface SelectableCategoryProps {
	name:string
}

export default function SelectableCategory(props:SelectableCategoryProps) {
	const handleSelect = () => {
		// TODO
	}

	return (
		<Chip 
		label="category 1" 
		onClick={handleSelect} 
		color="primary"
		size="small"/>
	)
}