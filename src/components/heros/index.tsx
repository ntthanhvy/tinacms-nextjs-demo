import { GlobalTheme, PageBlocksHero } from "../../../tina/__generated__/types";

import { PocketHero } from "./PocketHero";
import { SalientHero } from "./SalientHero";

export const Hero = ({ data }: { data: PageBlocksHero }) => {
	// return <PocketHero data={data} />;
	switch (data.template) {
		case "pocket":
			return <PocketHero data={data} />;
		case "salient":
			return <SalientHero data={data} />;
		default:
			return <PocketHero data={data} />;
	}
};
