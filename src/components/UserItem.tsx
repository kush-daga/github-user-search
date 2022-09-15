import { Box, ListItem } from "@chakra-ui/react";

import React from "react";
import { useGetUserQuery } from "../redux/features/api/apiSlice";

interface UserItemProps {
	userId: string;
}

export type UserDataType = {
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
	name: string;
	company: string;
	blog: string;
	location: string;
	email: string;
	hireable: boolean;
	bio: string;
	twitter_username: string;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: string;
	updated_at: string;
};

const UserItem: React.FC<UserItemProps> = ({ userId }) => {
	const { data: user } = useGetUserQuery({ userLogin: userId }) as {
		data: UserDataType;
	};
	return (
		<ListItem>
			<Box p={4} bg={"gray.100"} m={2}>
				<div>{user?.name}</div>
			</Box>
		</ListItem>
	);
};

export default UserItem;
