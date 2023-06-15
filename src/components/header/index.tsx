import { GlobalHeader } from "../../../tina/__generated__/types";
import { PocketHeader } from "./PocketHeader";
import { SalientHeader } from "./SalientHeader";

export const Header = ({ data }: { data: GlobalHeader }) => {
	switch (data.template) {
		case "salient":
			return <SalientHeader data={data} />;
		case "pocket":
		default:
			return <PocketHeader data={data} />;
	}
};
