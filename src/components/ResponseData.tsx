import { Center, Heading, List, ListItem, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLazySearchUsersQuery } from "../redux/features/api/apiSlice";
import UserItem from "./UserItem";

interface ResponseDataProps {
	users: Array<{
		login: string;
		id: number;
		node_id: string;
		avatar_url: string;
		gravatar_id: string;
		url: string;
		html_url: string;
		followers_url: string;
		following_url: string;
		gists_url: string;
		starred_url: string;
		subscriptions_url: string;
		organizations_url: string;
		repos_url: string;
		events_url: string;
		received_events_url: string;
		type: string;
		site_admin: boolean;
		score: number;
	}>;
}

const ResponseData: React.FC<ResponseDataProps> = ({ users }) => {
	return users ? (
		<List
			my={2}
			h="60vh"
			overflowY={"scroll"}
			p={4}
			bg="gray.50"
			rounded="lg"
			w="100%"
		>
			{users.map((user) => {
				return <UserItem userId={user?.login} />;
			})}
		</List>
	) : (
		<List my={2} p={4} rounded="lg" w="100%">
			<ListItem>
				<Center>
					<Text fontSize="2xl">Please Search</Text>
				</Center>
			</ListItem>
		</List>
	);
};

export default ResponseData;
