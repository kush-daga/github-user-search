// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserDataType } from "../../../components/UserItem";

// Define our single API slice object
export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.github.com",
		prepareHeaders: (headers, { getState }) => {
			const authToken = import.meta.env.VITE_GITHUB_AUTH_TOKEN;
			console.log("PREPARING HEADERS", authToken);

			// If we have a token set in state, let's assume that we should be passing it.
			if (authToken) {
				headers.set("Authorization", `Bearer ${authToken}`);
			}

			headers.set("Accept", "application/vnd.github+json");

			return headers;
		},
	}),

	endpoints: (builder) => ({
		searchUsers: builder.query({
			query: ({ language, location }: { language: string; location: string }) =>
				`/search/users?${
					"q=" + encodeURIComponent(`location:${location} language:${language}`)
				}`,
		}),
		getUser: builder.query<UserDataType, { userLogin: string }>({
			query: ({ userLogin }) => `/users/${userLogin}`,
		}),
	}),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useLazySearchUsersQuery, useGetUserQuery } = apiSlice;
