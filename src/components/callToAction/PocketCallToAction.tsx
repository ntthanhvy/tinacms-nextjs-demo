import { AppStoreLink } from "@/components/AppStoreLink";
import { CircleBackground } from "@/components/CircleBackground";
import { Container } from "@/components/Container";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function PocketCallToAction({ data }: { data: any }) {
	return (
		<section
			id="get-free-shares-today"
			className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
			data-tina-field={tinaField(data, "template")}
		>
			<div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
				<CircleBackground color="#fff" className="animate-spin-slower" />
			</div>
			<Container className="relative">
				<div className="mx-auto max-w-md sm:text-center">
					<h2
						className="text-3xl font-medium tracking-tight text-white sm:text-4xl"
						data-tina-field={tinaField(data, "headline")}
					>
						{/* Get your first tips today */}
						{data.headline}
					</h2>
					<p
						className="mt-4 text-lg text-gray-300"
						data-tina-field={tinaField(data, "text")}
					>
						{/* It takes 30 seconds to sign up. Download the app and create an
						account today and we’ll send you a tip guaranteed to double your
						first investment. */}
						<TinaMarkdown content={data.text} />
					</p>
					<div className="mt-8 flex justify-center">
						<AppStoreLink color="white" />
					</div>
				</div>
			</Container>
		</section>
	);
}
