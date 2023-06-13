import { PropsWithChildren } from "react";

export default function Layout({ data, props }: PropsWithChildren<any>) {
	return (
		<div className="w-full min-h-screen bg-gray-200">
			<header></header>

			<main>{props.children}</main>
		</div>
	);
}
