import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import imageUrlBuilder from "@sanity/image-url";

// const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
// const dataset = process.env.SANITY_STUDIO_DATASET;

const studioConfig = defineConfig({
	basePath: "/studio",
	name: "Deliveroo_Content_Studio",
	title: "Deliveroo clone studio",

	projectId: "d20f9b8r",
	dataset: "production",
	useCdn: true,
	defaultApiVersion: "2022-11-15",

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
});

const builder = imageUrlBuilder(studioConfig);
export const urlFor = (source) =>
	builder.image(source);

export default studioConfig;
