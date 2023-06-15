import {
	callToActionTemplate,
	contentTemplate,
	faqsTemplate,
	heroTemplate,
	pricingTemplate,
	primaryFeatureTemplate,
	secondaryFeatureTemplate,
	templateList,
} from "../src/components/blocks/templates";
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
	branch,
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!, // Get this from tina.io
	token: process.env.TINA_TOKEN!, // Get this from tina.io
	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "",
			publicFolder: "public",
		},
	},
	schema: {
		collections: [
			{
				name: "post",
				label: "Posts",
				path: "content/posts",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
				ui: {
					// This is an DEMO router. You can remove this to fit your site
					router: ({ document }) => `/demo/blog/${document._sys.filename}`,
				},
			},
			{
				name: "global",
				label: "Global",
				path: "content/global",
				ui: {
					global: true,
					allowedActions: {
						create: false,
						delete: false,
					},
				},
				format: "json",
				fields: [
					{
						name: "header",
						label: "Header",
						type: "object",
						ui: {
							defaultItem: {
								style: "default",
								template: "pocket",
							},
						},
						fields: [
							{
								type: "string",
								label: "Styles",
								name: "style",
								options: [
									{ label: "Default", value: "default" },
									{ label: "Centered", value: "centered" },
									{ label: "Righted", value: "righted" },
								],
							},
							templateList as any,
							{
								type: "object",
								label: "Nav Link",
								name: "nav",
								list: true,
								ui: {
									itemProps: (item) => ({ label: item?.label }),
									defaultItem: {
										href: "#",
										label: "Products",
									},
								},
								fields: [
									{
										type: "string",
										label: "Link",
										name: "href",
									},
									{
										type: "string",
										label: "Label",
										name: "label",
									},
								],
							},
							{
								type: "object",
								label: "Actions",
								name: "actions",
								list: true,
								ui: {
									itemProps: (item) => ({ label: item?.label }),
								},
								fields: [
									{
										label: "Label",
										name: "label",
										type: "string",
									},
									{
										label: "Type",
										name: "type",
										type: "string",
										options: [
											{ label: "Button", value: "button" },
											{ label: "Link", value: "link" },
										],
									},
								],
							},
						],
					},
					{
						name: "footer",
						label: "Footer",
						type: "object",
						fields: [
							{
								type: "string",
								label: "Title",
								name: "title",
							},
						],
					},
					{
						name: "theme",
						label: "Theme",
						type: "object",
						fields: [
							{
								type: "string",
								label: "Primary Color",
								name: "primaryColor",
							},
						],
					},
				],
			},
			{
				name: "page",
				label: "Pages",
				path: "content/pages",
				ui: {
					router: ({ document }) => {
						let filename = document._sys.filename;
						if (filename == "home") {
							return "/";
						}

						return `/${filename}`;
					},
				},
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
					},
					{
						type: "string",
						name: "description",
						label: "Description",
					},
					{
						type: "object",
						name: "blocks",
						label: "Sections",
						list: true,
						ui: {
							visualSelector: true,
						},
						templates: [
							heroTemplate,
							primaryFeatureTemplate,
							secondaryFeatureTemplate,
							callToActionTemplate,
							faqsTemplate,
							pricingTemplate,
							contentTemplate as any,
						],
					},
				],
			},
		],
	},
});
