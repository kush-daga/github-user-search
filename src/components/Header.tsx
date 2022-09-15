import { Center, Heading, Box } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useLazySearchUsersQuery } from "../redux/features/api/apiSlice";
import SearchBar from "./SearchBar";

interface HeaderProps {
	setLanguage: React.Dispatch<React.SetStateAction<string>>;
	setLocation: React.Dispatch<React.SetStateAction<string>>;
	triggerFn: () => any;
}

const Header: React.FC<HeaderProps> = ({
	setLanguage,
	setLocation,
	triggerFn,
}) => {
	return (
		<Box>
			<Center p={8}>
				<Heading>Search GitHub Users</Heading>
			</Center>
			<Center mx={"auto"} p={8} bg="gray.50" rounded={"lg"}>
				<Box display={"flex"} w="100%" px={8} gap={8}>
					<SearchBar
						placeholder="Enter Language"
						onChange={(text) => {
							setLanguage(text);
						}}
					></SearchBar>
					<SearchBar
						placeholder="Enter Location"
						onChange={(text) => {
							setLocation(text);
						}}
					></SearchBar>
				</Box>
				<Box
					as="button"
					bg="blue.200"
					px={8}
					py={2}
					onClick={() => {
						triggerFn();
					}}
				>
					Search
				</Box>
			</Center>
		</Box>
	);
};

export default Header;
