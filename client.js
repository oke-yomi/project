import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
	projectId: "d20f9b8r",
	dataset: "production",
	useCdn: true,
	apiVersion: "2022-11-15",
	// apiVersion: "2022-11-15",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
