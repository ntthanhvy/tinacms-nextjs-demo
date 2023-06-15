import { PageBlocksFaqs } from "../../../tina/__generated__/types";
import { PocketFaqs } from "./PocketFaqs";
import { SalientFaqs } from "./SalientFaqs";

export const Faqs = ({ data }: { data: PageBlocksFaqs }) => {
	switch (data.template) {
		case "salient":
			return <SalientFaqs data={data} />;
		case "pocket":
		default:
			return <PocketFaqs data={data} />;
	}
};
