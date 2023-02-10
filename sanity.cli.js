import { defineCliConfig } from "sanity/cli";

// const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
// const dataset = process.env.SANITY_STUDIO_DATASET;

export default defineCliConfig({
	api: {
		projectId: "d20f9b8r",
		dataset: "production",
	},
});
