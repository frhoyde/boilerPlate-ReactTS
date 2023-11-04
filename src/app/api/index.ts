import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { env } from "app/config";

const baseQuery = fetchBaseQuery({
	baseUrl: env.apiEndpoint,
	credentials: "include",
});

export const api = createApi({
	reducerPath: "api",
	baseQuery,
	endpoints: () => ({}),
});
