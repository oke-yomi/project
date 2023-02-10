import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

// const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
// const dataset = process.env.SANITY_STUDIO_DATASET;

export default defineConfig({
	basePath: "/studio",
	name: "Deliveroo_Content_Studio",
	title: "Deliveroo clone studio",

	projectId: "d20f9b8r",
	dataset: "production",

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
});
