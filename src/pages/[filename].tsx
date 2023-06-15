import { CallToAction } from "@/components/callToAction";
import { Faqs } from "@/components/faqs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/heros";
import { Pricing } from "@/components/pricing";
import { PrimaryFeatures } from "@/components/primaryFeature";
import { Reviews } from "@/components/Reviews";
import { SecondaryFeatures } from "@/components/secondaryFeature";
import Head from "next/head";
import { tinaField, useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { PageBlocks } from "../../tina/__generated__/types";
import { Content } from "@/components/content";

export default function HomePage(
	props: InferGetStaticPropsType<typeof getStaticProps>
) {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});

	console.log({ ...data });

	const content = data.page;

	return (
		<>
			<Head>
				<title data-tina-field={tinaField(content, "title")}>
					{/* Pocker - Invest at the perfect time */}
					{content.title}
				</title>
				<meta
					data-tina-field={tinaField(content, "description")}
					name="description"
					// content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
					content={content.description ?? ""}
				/>
			</Head>

			<Header data={data.global.header as any} />

			<main>
				{content.blocks &&
					content.blocks.map((block: PageBlocks | null, index) => {
						console.log({ block });
						switch (block?.__typename) {
							case "PageBlocksHero":
								return (
									<Hero key={`${block.__typename}-${index}`} data={block} />
								);
							case "PageBlocksPrimaryFeature":
								return (
									<PrimaryFeatures
										key={`${block.__typename}-${index}`}
										data={block}
									/>
								);
							case "PageBlocksSecondaryFeature":
								return (
									<SecondaryFeatures key={block.__typename} data={block} />
								);
							case "PageBlocksCallToAction":
								return <CallToAction key={block.__typename} data={block} />;
							case "PageBlocksFaqs":
								return <Faqs key={block.__typename} data={block} />;
							case "PageBlocksPricing":
								return <Pricing key={block.__typename} data={block} />;
							case "PageBlocksContent":
								return <Content key={block.__typename} data={block} />;
							default:
								return null;
						}
					})}
				{/* <Hero /> */}
				{/* <PrimaryFeatures /> */}
				{/* <SecondaryFeatures /> */}
				{/* <CallToAction /> */}
				{/* <Reviews /> */}
				{/* <Pricing /> */}
				{/* <Faqs /> */}
			</main>

			<Footer />
		</>
	);
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	var filename = params?.filename as string;
	console.log({ filename });
	const pageResponse = await client.queries.contentQuery({
		relativePath: `${filename}.md`,
	});

	return {
		props: {
			data: pageResponse.data,
			query: pageResponse.query,
			variables: pageResponse.variables,
		},
	};
};

export const getStaticPaths = async () => {
	const pagesListData = await client.queries.pageConnection();
	return {
		paths: pagesListData.data.pageConnection?.edges?.map((page) => ({
			params: { filename: page?.node?._sys.filename },
		})),
		fallback: false,
	};
};
