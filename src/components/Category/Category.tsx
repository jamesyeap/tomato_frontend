import { Chip } from "@mui/material";

export interface CategoryProps {
	name:string
}

export default function Category(props:CategoryProps) {
	return (
		<Chip label={props.name} color="primary" size="small"/>
	)
}