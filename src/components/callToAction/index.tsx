import { PageBlocksCallToAction } from "../../../tina/__generated__/types";
import { PocketCallToAction } from "./PocketCallToAction";
import { SalientCallToAction } from "./SalientCallToAction";

export const CallToAction = ({ data }: { data: PageBlocksCallToAction }) => {
	switch (data.template) {
		case "pocket":
			return <PocketCallToAction data={data} />;
		case "salient":
			return <SalientCallToAction data={data} />;
		default:
			return <PocketCallToAction data={data} />;
	}
};
