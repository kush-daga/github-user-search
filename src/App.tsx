import {
	Box,
	Center,
	CircularProgress,
	Container,
	Text,
} from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import ResponseData from "./components/ResponseData";
import { useLazySearchUsersQuery } from "./redux/features/api/apiSlice";

function App() {
	const [language, setLanguage] = useState("");
	const [location, setLocation] = useState("");
	const [trigger, { isFetching, data }] = useLazySearchUsersQuery();

	const triggerFn = useCallback(() => {
		trigger({ language, location });
	}, [location, language]);

	return (
		<Box
			w="100vw"
			h={"100vh"}
			p={16}
			display="flex"
			flexDir={"column"}
			alignItems={"center"}
		>
			<Box maxW="960px" p={4} w="100%">
				<Header
					setLanguage={setLanguage}
					setLocation={setLocation}
					triggerFn={triggerFn}
				/>
				{isFetching ? (
					<Center>
						<CircularProgress isIndeterminate color="blue.300" my={16} />
					</Center>
				) : (
					<ResponseData users={data?.items} />
				)}
			</Box>
		</Box>
	);
}

export default App;
