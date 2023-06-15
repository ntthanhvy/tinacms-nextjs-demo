import { PageBlocksPricing } from "../../../tina/__generated__/types";
import { PocketPricing } from "./PocketPricing";
import { SalientPricing } from "./SalientPricing";

export const Pricing = ({ data }: { data: PageBlocksPricing }) => {
	switch (data.template) {
		case "salient":
			return <SalientPricing data={data} />;
		case "pocket":
		default:
			return <PocketPricing data={data} />;
	}
};
