import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Prism } from "tinacms/dist/rich-text/prism";
import type { Components, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { Container } from "../Container";
import { tinaField } from "tinacms/dist/react";
import { useMemo } from "react";

export const components: Components<{
	BlockQuote: { children: TinaMarkdownContent };
	DateTime: { format?: string };
	NewsletterSignup: any;
}> = {
	code_block: (props) => (props ? <Prism {...props} /> : <Prism value="" />),
	BlockQuote: (props: { children: TinaMarkdownContent }) => {
		return (
			<div>
				<blockquote>
					<TinaMarkdown content={props.children} />
				</blockquote>
			</div>
		);
	},
	DateTime: (props) => {
		const dt = useMemo(() => {
			return new Date();
		}, []);

		// switch (props.format) {
		// 	case "iso":
		// 		return <span>{format(dt, "yyyy-MM-dd")}</span>;
		// 	case "utc":
		// 		return <span>{format(dt, "eee, dd MMM yyyy HH:mm:ss OOOO")}</span>;
		// 	case "local":
		// 		return <span>{format(dt, "P")}</span>;
		// 	default:
		// 		return <span>{format(dt, "P")}</span>;
		// }
		return <span>{dt.toISOString()}</span>;
	},
	NewsletterSignup: (props) => {
		return <div>NewsletterSignup</div>;
	},
	img: (props) => (
		<span className="flex items-center justify-center">
			<img src={props?.url} alt={props?.alt} />
		</span>
	),
};

export const Content = ({ data }: { data: any }) => {
	return (
		<section
			className="bg-white px-6 py-32 lg:px-8"
			data-tina-field={tinaField(data)}
		>
			<Container className="prose ">
				<TinaMarkdown components={components} content={data.body} />
			</Container>
		</section>
	);
};
