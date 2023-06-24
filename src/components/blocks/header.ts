import { templateList } from "./templates";

export const defaultHeaderFields = [
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
			itemProps: (item: any) => ({ label: item?.label }),
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
			itemProps: (item: any) => ({ label: item?.label }),
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
];
