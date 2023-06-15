import type { Field, Template } from "tinacms";

export const templateList = {
	type: "string",
	label: "Template",
	name: "template",
	options: [
		{ label: "Pocket", value: "pocket" },
		{ label: "Salient", value: "salient" },
	],
};

export const heroTemplate: Template = {
	name: "hero",
	label: "Hero",
	fields: [
		templateList as any,
		{
			name: "headline",
			label: "Headline",
			type: "string",
		},
		{
			name: "text",
			label: "Text",
			type: "rich-text",
		},
		{
			label: "Actions",
			name: "actions",
			type: "object",
			list: true,
			ui: {
				defaultItem: {
					label: "Action Label",
					type: "button",
					icon: true,
					link: "/",
				},
				itemProps: (item) => ({ label: item.label }),
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
						{ label: "AppStore", value: "appstore" },
						{ label: "Button", value: "button" },
						{ label: "Link", value: "link" },
					],
				},
				{
					label: "Icon",
					name: "icon",
					type: "boolean",
				},
				{
					label: "Link",
					name: "link",
					type: "string",
				},
			],
		},
	],
};

export const primaryFeatureTemplate: Template = {
	name: "primaryFeature",
	label: "Primary Feature",
	fields: [
		templateList as any,
		{
			name: "headline",
			label: "Headline",
			type: "string",
		},
		{
			name: "text",
			label: "Text",
			type: "rich-text",
		},
		{
			type: "object",
			label: "Features",
			list: true,
			name: "features",
			ui: {
				itemProps: (item) => ({ label: item?.title }),
			},
			fields: [
				{
					name: "icon",
					type: "boolean",
					label: "Icon",
				},
				{
					name: "title",
					type: "string",
					label: "Title",
				},
				{
					name: "text",
					type: "string",
					label: "Text",
					ui: {
						component: "textarea",
					},
				},
			],
		},
	],
};

export const secondaryFeatureTemplate: Template = {
	name: "secondaryFeature",
	label: "Secondary Feature",
	fields: [
		templateList as any,
		{
			name: "headline",
			label: "Headline",
			type: "string",
		},
		{
			name: "subheadline",
			label: "Subheadline",
			type: "string",
			ui: {
				component: "textarea",
			},
		},
	],
};

export const callToActionTemplate: Template = {
	name: "callToAction",
	label: "Call to Action",
	ui: {
		defaultItem: {
			template: "pocket",
		},
	},
	fields: [
		templateList as any,
		{
			name: "headline",
			label: "Headline",
			type: "string",
		},
		{
			name: "text",
			label: "Text",
			type: "rich-text",
		},
	],
};

export const faqsTemplate: Template = {
	name: "faqs",
	label: "FAQs",
	fields: [
		templateList as any,
		{
			type: "string",
			label: "Headline",
			name: "headline",
		},
		{
			type: "string",
			label: "Subheadline",
			name: "subHeadline",
			ui: {
				component: "textarea",
			},
		},
		{
			type: "object",
			name: "contactLink",
			label: "Contact Link",
			ui: {
				itemProps: (item) => ({ label: item.text }),
			},
			fields: [
				{
					type: "string",
					label: "Text",
					name: "text",
				},
				{
					type: "string",
					label: "URL",
					name: "url",
					description: "URL to contact page",
				},
			],
		},
		{
			type: "object",
			list: true,
			name: "questions",
			label: "FAQs",
			ui: {
				itemProps: (item) => ({ label: item.question }),
			},
			fields: [
				{
					type: "string",
					label: "Question",
					name: "question",
				},
				{
					type: "string",
					label: "Answer",
					name: "answer",
				},
			],
		},
	],
};

export const pricingTemplate: Template = {
	name: "pricing",
	label: "Pricing",
	fields: [
		templateList as any,
		{
			type: "string",
			label: "Headline",
			name: "headline",
		},
		{
			type: "string",
			label: "Subheadline",
			name: "subHeadline",
			ui: {
				component: "textarea",
			},
		},
	],
};

export const contentTemplate = {
	name: "content",
	label: "Content",
	ui: {
		category: "Content",
	},
	fields: [
		templateList as any,
		{
			type: "string",
			label: "Title",
			name: "title",
			isTitle: true,
			required: true,
		},
		{
			type: "rich-text",
			label: "Body",
			name: "body",
			isBody: true,
			templates: [
				{
					label: "Block Quote",
					name: "BlockQuote",
					fields: [
						{
							name: "children",
							label: "Quote",
							type: "rich-text",
						},
						{
							name: "authorName",
							label: "Author",
							type: "string",
						},
					],
				},
			],
		},
	],
};
