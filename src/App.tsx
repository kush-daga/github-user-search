import { Box } from "@chakra-ui/react";
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
		<Box w="100vw" p={4} h="100vh" bg="white">
			<Header
				setLanguage={setLanguage}
				setLocation={setLocation}
				triggerFn={triggerFn}
			/>
			<ResponseData users={data?.items} />
		</Box>
	);
}

export default App;
