import { Box, Center, Heading } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";

function App() {
	return (
		<Box w="100vw" p={4} h="100vh" bg="white">
			<Center p={8}>
				<Heading>Search GitHub Users</Heading>
			</Center>
			<Center w="100%" p={8}>
				<Box display={"flex"} w="100%" px={8} gap={8}>
					<SearchBar
						placeholder="Enter Language"
						onChange={(text) => {
							console.log("text", text);
						}}
					></SearchBar>
					<SearchBar
						placeholder="Enter Location"
						onChange={(text) => {
							console.log("text", text);
						}}
					></SearchBar>
				</Box>
				<Box as="button" bg="blue.200" px={8} py={2}>
					Search
				</Box>
			</Center>
		</Box>
	);
}

export default App;
