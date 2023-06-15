import { PageBlocksPrimaryFeature } from "../../../tina/__generated__/types";

import { PocketPrimaryFeatures } from "./PocketPrimaryFeatures";
import { SalientPrimaryFeatures } from "./SalientPrimaryFeature";

export const PrimaryFeatures = ({
	data,
}: {
	data: PageBlocksPrimaryFeature;
}) => {
	switch (data.template) {
		case "pocket":
			return <PocketPrimaryFeatures data={data} />;
		case "salient":
			return <SalientPrimaryFeatures data={data} />;
		default:
			return <PocketPrimaryFeatures data={data} />;
	}
};
