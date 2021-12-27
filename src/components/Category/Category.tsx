import { Chip } from "@mui/material";
export interface CategoryProps {
	category_title:string,
	category_id:number
}

interface CategoryInputProps {
	category_name:string
}

export default function Category(props:CategoryInputProps) {
	return (
		<Chip 
			label={props.category_name} 
			color="primary" 
			size="small"
		/>
	)
}