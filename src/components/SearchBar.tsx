import { Input } from "@chakra-ui/react";
import React from "react";

interface SearchBarProps {
	placeholder: string;
	onChange: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChange }) => {
	return (
		<Input
			placeholder={placeholder}
			onChange={(e) => {
				onChange(e.target.value);
			}}
			variant="flushed"
		></Input>
	);
};

export default SearchBar;
