import { Chip } from "@mui/material";

export interface CategoryProps {
	name:string
}

export default function Category(props:CategoryProps) {
	return (
		<Chip label="category 1" color="primary" size="small"/>
	)
}