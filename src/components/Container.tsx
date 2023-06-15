import clsx from "clsx";
import { AllHTMLAttributes } from "react";

export function Container({ className, ...props }: AllHTMLAttributes<any>) {
	return (
		<div
			className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
			{...props}
		/>
	);
}
