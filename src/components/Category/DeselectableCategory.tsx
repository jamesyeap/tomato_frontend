import { Chip } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../App";

export interface DeselectableCategoryProps {
	category_name:string
}

export default function DeselectableCategory(props:DeselectableCategoryProps) {
	const appContext = useContext(Context);

	const handleDeselect = () => {
		// clears Category filter
		if (appContext) {
			appContext.handleDeselectCategory();
		}
	}

	return (
		<Chip 
		label={props.category_name}
		onDelete={handleDeselect} 
		color="primary"
		size="small"/>
	)
}