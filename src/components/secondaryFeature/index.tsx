import { PageBlocksSecondaryFeature } from "../../../tina/__generated__/types";

import { PocketSecondaryFeatures } from "./PocketSecondaryFeatures";
import { SalientSecondaryFeatures } from "./SalientSecondaryFeatures";

export const SecondaryFeatures = ({
	data,
}: {
	data: PageBlocksSecondaryFeature;
}) => {
	switch (data.template) {
		case "pocket":
			return <PocketSecondaryFeatures data={data} />;
		case "salient":
			return <SalientSecondaryFeatures data={data} />;
		default:
			return <PocketSecondaryFeatures data={data} />;
	}
};
