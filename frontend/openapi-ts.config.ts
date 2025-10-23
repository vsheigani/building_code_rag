import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
	input: "./openapi.json",
	output: "./src/clients",

	plugins: [
		"@hey-api/client-fetch",
		{
			name: "@hey-api/schemas",
			type: "json",
		},
	],
});
