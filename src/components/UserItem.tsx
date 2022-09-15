import { EmailIcon, InfoIcon } from "@chakra-ui/icons";
import {
	Box,
	Flex,
	Icon,
	Image,
	Link,
	ListItem,
	Stat,
	StatLabel,
	StatNumber,
	Tag,
	Text,
} from "@chakra-ui/react";

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
	const { data: user, isFetching } = useGetUserQuery({ userLogin: userId });

	if (isFetching) return <div>Loading</div>;
	if (!user) return null;
	if (!user?.name) return null;

	return (
		<ListItem>
			<Box
				p={2}
				py={4}
				my={0}
				rounded={"lg"}
				display="flex"
				borderBottom={"black"}
			>
				<Image
					src={user.avatar_url}
					maxW="20%"
					rounded={"md"}
					objectFit="cover"
				></Image>
				<Flex
					mx={4}
					bg=""
					w={"100%"}
					flexDir="column"
					justifyContent={"space-between"}
				>
					<Box>
						<Flex
							alignItems={"center"}
							gap={2}
							justifyContent={"space-between"}
						>
							<Flex gap={2} alignItems={"center"}>
								<Link href={user.html_url}>
									<Text fontSize={"2xl"} fontWeight="bold">
										{user.name}
									</Text>
								</Link>
								<Tag
									variant={"subtle"}
									size="md"
									colorScheme={user.hireable ? "cyan" : "red"}
								>
									<Text fontSize={"xs"}>
										{user.hireable ? "Hireable!" : "Not Hireable!"}
									</Text>
								</Tag>
							</Flex>
							<Flex alignItems={"end"} gap={2}>
								<Link href={user.blog}>
									<InfoIcon />
								</Link>
								<Link href={`mailto:${user.email}`}>
									<EmailIcon />
								</Link>
								<Text fontSize={"sm"} color={"gray.700"}>
									@{user.login}
								</Text>
							</Flex>
						</Flex>
						<Text fontSize={"md"} my={1.5}>
							{user.bio}
						</Text>
					</Box>
					<Flex>
						<Stat>
							<StatLabel fontSize={"md"}>Repositories</StatLabel>
							<StatNumber fontSize={"xl"}>{user.public_repos}</StatNumber>
						</Stat>
						<Stat>
							<StatLabel fontSize={"md"}>Gists</StatLabel>
							<StatNumber fontSize={"xl"}>{user.public_gists}</StatNumber>
						</Stat>
						<Stat>
							<StatLabel fontSize={"md"}>Followers</StatLabel>
							<StatNumber fontSize={"xl"}>{user.followers}</StatNumber>
						</Stat>
					</Flex>
				</Flex>
			</Box>
			<hr />
		</ListItem>
	);
};

export default UserItem;
