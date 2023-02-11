import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
	api: {
		projectId: "d20f9b8r",
		dataset: "production",
		useCdn: true,
		apiVersion: "2021-10-21",
	},
});
