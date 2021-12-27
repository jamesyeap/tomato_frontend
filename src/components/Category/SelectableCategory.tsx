import { Chip } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../App";
import { CategoryProps } from "./Category";

export interface SelectableCategoryProps {
	category:CategoryProps
}

export default function SelectableCategory(props:SelectableCategoryProps) {
	const appContext = useContext(Context);

	const handleSelect = () => {
		if (appContext) {
			appContext.handleSelectCategory(props.category);
		}
	}

	return (
		<Chip
		label={props.category.category_title}
		onClick={handleSelect} 
		color="primary"
		size="small"/>
	)
}