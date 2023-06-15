import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-call-to-action.jpg";
import { PageBlocksCallToAction } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

import { TinaMarkdown } from "tinacms/dist/rich-text";

export function SalientCallToAction({
	data,
}: {
	data: PageBlocksCallToAction;
}) {
	return (
		<section
			id="get-started-today"
			className="relative overflow-hidden bg-blue-600 py-32"
			data-tina-field={tinaField(data, "template")}
		>
			<Image
				className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
				src={backgroundImage}
				alt=""
				width={2347}
				height={1244}
				unoptimized
			/>
			<Container className="relative">
				<div className="mx-auto max-w-lg text-center">
					<h2
						className="font-display text-3xl tracking-tight text-white sm:text-4xl"
						data-tina-field={tinaField(data, "headline")}
					>
						{/* Get started today */}
						{data.headline}
					</h2>
					<p
						className="mt-4 text-lg tracking-tight text-white"
						data-tina-field={tinaField(data, "text")}
					>
						{/* It’s time to take control of your books. Buy our software so you can
						feel like you’re doing something productive. */}
						<TinaMarkdown content={data.text} />
					</p>
					<Button href="/register" color="white" className="mt-10">
						Get 6 months free
					</Button>
				</div>
			</Container>
		</section>
	);
}
